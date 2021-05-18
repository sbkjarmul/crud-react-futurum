import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns();
  }, [])

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
  }

  return (
    <GlobalContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </GlobalContext.Provider>
  )
}