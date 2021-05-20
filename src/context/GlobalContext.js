import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState({}); 
  const [refresh, setRefresh] = useState(true);
 
  useEffect(() => {
    getCampaigns();
  }, [refresh])

  const getCampaigns = async () => {
    const response = await fetch('https://herokupostgresflask.herokuapp.com/campaigns');
    const data = await response.json();

    setCampaigns(data);
  }

  const addCampaign = async (campaign) => {
    await fetch('https://herokupostgresflask.herokuapp.com/campaigns', 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaign)
    });

    setRefresh(!refresh);
  }

  const editCampaign = async (campaign) => {
    await fetch(`https://herokupostgresflask.herokuapp.com/campaigns/${campaign.id}`, 
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaign)
    });

    setRefresh(!refresh);
  }

  const deleteCampaign = async (id) => {
    await fetch(`https://herokupostgresflask.herokuapp.com/campaigns/${id}`,
    {
      method: 'DELETE',
    });
    
    setRefresh(!refresh);
  }

  return (
    <GlobalContext.Provider value={{ 
      campaigns,
      getCampaigns, 
      addCampaign, 
      currentCampaign, 
      setCurrentCampaign, 
      editCampaign, 
      deleteCampaign, 
      refresh
    }}>
      {children}
    </GlobalContext.Provider>
  )
}