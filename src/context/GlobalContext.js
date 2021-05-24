import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const EMERALD_FUNDS = 10000000;

  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState({}); 
  const [refresh, setRefresh] = useState(true);
  const [accountFunds, setAccountFunds] = useState(EMERALD_FUNDS);
 
  useEffect(() => {
    getCampaigns();
  }, [refresh])

  const getCampaigns = async () => {
    const response = await fetch('https://herokupostgresflask.herokuapp.com/campaigns');
    const data = await response.json();

    setCampaigns(data);
    subtractFund(data);
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

  const subtractFund = (data) => {
    let campaignsFunds = 0;
    data.forEach(item => {
      campaignsFunds = campaignsFunds + item.fund;
    });

    setAccountFunds(EMERALD_FUNDS - campaignsFunds);
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
      refresh,
      accountFunds,
      setAccountFunds
    }}>
      {children}
    </GlobalContext.Provider>
  )
}