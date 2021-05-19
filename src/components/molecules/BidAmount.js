import React from 'react'
import Label from '../atoms/Label'

const BidAmount = ({setBidAmount, bidAmount}) => {

  const getBidAmount = (e) => {
    const bid = parseFloat(e.target.value);
    setBidAmount(bid);
  }

  return (
    <div>
      <Label formField="bid-amount">Bid amount</Label>
      <input className="form__input" onChange={getBidAmount} value={bidAmount} type="number" name="bid-amount" min="100" placeholder="100" required />
    </div>
  )
}

export default BidAmount