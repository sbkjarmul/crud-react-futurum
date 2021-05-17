import React from 'react'
import '../../App.css'
import Title from '../atoms/Title'
import Form from '../organisms/Form'
import CampaignName from '../molecules/CampaignName'
import Keywords from '../molecules/Keywords'
import CampaignFund from '../molecules/CampaignFund'
import Status from '../molecules/Status'
import BidAmount from '../molecules/BidAmount'
import Town from '../molecules/Town'
import Radius from '../molecules/Radius'
import ButtonBox from '../molecules/ButtonBox'

const AddCampaign = () => {
  return (
    <div className="home">
      <Title>Add Campaign</Title>
      <Form>
      <CampaignName />
        <Keywords />
        <CampaignFund />
        <BidAmount />
        <Status />
        <Town />
        <Radius />
        <ButtonBox submitName="Add"/>
      </Form>
    </div>
  )
}

export default AddCampaign;