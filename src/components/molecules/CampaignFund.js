import React from 'react'
import Label from '../atoms/Label'

const CampaignFund = () => {
  return (
    <div>
      <Label formField="campaign-fund">Campaign fund</Label>
      <input className="form__input" type="number" name="campaign-fund" required />
    </div>
  )
}

export default CampaignFund