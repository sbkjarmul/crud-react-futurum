import React from 'react'
import Label from '../atoms/Label'

const CampaignName = () => {
  return (
    <div>
      <Label formField="campaign-name">Name</Label>
      <input className="form__input" type="text" name="campaign-name" required />
    </div>
  )
}

export default CampaignName