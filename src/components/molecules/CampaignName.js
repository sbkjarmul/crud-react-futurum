import React, { useContext, useState } from 'react'
import Label from '../atoms/Label'

const CampaignName = ({setName}) => {

  const getName = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <Label formField="campaign-name">Name</Label>
      <input className="form__input" type="text" onChange={getName} name="campaign-name" required />
    </div>
  )
}

export default CampaignName