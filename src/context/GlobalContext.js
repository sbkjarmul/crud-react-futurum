import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState({}); 
  const [refresh, setRefresh] = useState(true);
 

  const getCampaigns = async () => {
    const response = await fetch('http://localhost:5000/campaigns');
    const data = await response.json();

    setCampaigns(data);
  }

  const addCampaign = async (campaign) => {
    const response = await fetch('http://localhost:5000/campaigns', 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaign)
    });

    const data = response.json();
    console.log('Dodano!');
    setRefresh(!refresh);
  }

  const editCampaign = async (campaign) => {
    const response = await fetch(`http://localhost:5000/campaigns/${campaign.id}`, 
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaign)
    });

    const data = response.json();
    console.log('Zaktualizowano!');
    setRefresh(!refresh);
  }

  const deleteCampaign = async (id) => {
    const response = await fetch(`http://localhost:5000/campaigns/${id}`,
    {
      method: 'DELETE',
    });
    console.log('Usunięto!');
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
      refresh }}>
      {children}
    </GlobalContext.Provider>
  )
}