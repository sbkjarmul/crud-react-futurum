import React from 'react'
import Label from '../atoms/Label'

const CampaignFund = ({setFund, fund}) => {

  const getFund = (e) => {
    const fund = parseFloat(e.target.value);
    setFund(fund);
  }

  return (
    <div>
      <Label formField="campaign-fund">Campaign fund</Label>
      <input className="form__input" type="number" value={fund} onChange={getFund} name="campaign-fund" required />
    </div>
  )
}

export default CampaignFund