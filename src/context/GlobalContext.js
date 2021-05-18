import React, { createContext, useState } from 'react'

const initialState = {
  campaigns: [
    {
      id: 1,
      campaignName: 'Nike',
      keywords: 'nike shoes sport',
      campaignFund: 10000,
      bidAmount: 1500,
      status: 'on',
      town: 'Los Angeles',
      radius: '3000'
    },
    {
      id: 2,
      campaignName: 'Adidas',
      keywords: 'adidas clothes shoes',
      campaignFund: 20000,
      bidAmount: 2000,
      status: 'on',
      town: 'New York',
      radius: '2000'
    },
    {
      id: 3,
      campaignName: 'Cisco',
      keywords: 'routing web software',
      campaignFund: 30000,
      bidAmount: 3000,
      status: 'off',
      town: 'San Francisco',
      radius: '3300'
    }
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [campaigns, setCampaigns] = useState(initialState);

  return (
    <GlobalProvider
    value={{ campaigns: initialState.campaigns }}>
      {children}
    </GlobalProvider>
  )
}