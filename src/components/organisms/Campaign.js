import React from 'react'
import '../../App.css'
import Button from '../atoms/Button'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'


export const Campaign = ({ campaign }) => {
  return (
    <div className="campaign">
      <div className="campaign__column--name">{ campaign.campaignName }</div>
  <div className="campaign__column--keywords"> { campaign.keywords }</div>
      <div className="campaign__column--fund">${ campaign.campaignFund }</div>
      <div className="campaign__column--bid">${ campaign.bidAmount }</div>
      <div className="campaign__column--status">{ campaign.status }</div>
      <div className="campaign__column--town">{ campaign.town }</div>
      <div className="campaign__column--radius">{ campaign.radius }km</div>
      <div className="campaign__column--action">
      <Button buttonSize='small'><FaEdit/></Button>
      <Button buttonSize='small'><MdDelete/></Button>
      </div>

    </div>
  )
}

export default Campaign
