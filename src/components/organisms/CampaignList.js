import React, { useContext, useEffect } from 'react'
import '../../App.css'
import Campaign from './Campaign'
import CampaignHeader from './CampaignHeader'
import { GlobalContext } from '../../context/GlobalContext'

export const CampaignList = () => {
  const { campaigns, getCampaigns } = useContext(GlobalContext);

  useEffect(() => {
    getCampaigns();
    console.log('load campaigns');
  }, [refresh])

  return (
    <div className="campaign-list">
      <CampaignHeader />
      { campaigns.map( campaign => {
       return <Campaign 
       campaign={campaign}
       key={campaign.id}
       />
      }) }
    </div>
  )
}

export default CampaignList