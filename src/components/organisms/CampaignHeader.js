import React from 'react'
import '../../App.css'

export const CampaignHeader = () => {
  return (
    <div className="campaign campaign--header">
      <div className="campaign__column campaign__column--name">Name</div>
      <div className="campaign__column campaign__column--keywords">Keywords</div>
      <div className="campaign__column campaign__column--fund">Fund</div>
      <div className="campaign__column campaign__column--bid">Amount</div>
      <div className="campaign__column campaign__column--status">Status</div>
      <div className="campaign__column campaign__column--town">Town</div>
      <div className="campaign__column campaign__column--radius">Radius</div>
      <div className="campaign__column campaign__column--action"></div>
    </div>
  )
}

export default CampaignHeader
