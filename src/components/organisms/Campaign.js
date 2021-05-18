import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Button from '../atoms/Button'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

export const Campaign = ({ campaign }) => {
  const getStatus = () => {
    if (campaign.status === true) {
      return 'Online';
    }

    return 'Offline';
  }

  return (
    <div className="campaign">
      <div className="campaign__column--name">{ campaign.name }</div>
      <div className="campaign__column--keywords"> { campaign.keywords }</div>
      <div className="campaign__column--fund">${ campaign.fund }</div>
      <div className="campaign__column--bid">${ campaign.bid_amount }</div>
      <div className="campaign__column--status">{ getStatus() }</div>
      <div className="campaign__column--town">{ campaign.town }</div>
      <div className="campaign__column--radius">{ campaign.radius }km</div>
      <div className="campaign__column--action">
        <Link to={`/edit/${campaign.id}`}><Button buttonSize="small"><FaEdit/></Button></Link>
        <Button buttonSize="small" onClick={console.log('Usunięto!')}><MdDelete/></Button>
      </div>
    </div>
  )
}

export default Campaign
