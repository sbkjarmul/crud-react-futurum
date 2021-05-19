import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
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
import Button from '../atoms/Button'
import { GlobalContext } from '../../context/GlobalContext'


const EditCampaign = () => {
  const { editCampaign, currentCampaign } = useContext(GlobalContext);

  const [name, setName] = useState(currentCampaign.name);
  const [keywords, setKeywords] = useState(currentCampaign.keywords);
  const [fund, setFund] = useState(currentCampaign.fund);
  const [bidAmount, setBidAmount] = useState(currentCampaign.bid_amount);
  const [status, setStatus] = useState(currentCampaign.status);
  const [town, setTown] = useState(currentCampaign.town);
  const [radius, setRadius] = useState(currentCampaign.radius);

  const history = useHistory();

  const onSubmit = () => {
    const newCampaign = {
      id: currentCampaign.id,
      name,
      keywords,
      fund,
      bid_amount: bidAmount,
      status,
      town: town === '' ? 'Chicago' : town,
      radius
    };

    editCampaign(newCampaign);
    history.push('/');
  }

  return (
    <div className="home">
      <Title>Edit Campaign</Title>
      <Form onSubmit={onSubmit}>
          <CampaignName setName={setName} name={name}/>
          <Keywords setKeywords={setKeywords} keywords={keywords}/>
          <CampaignFund setFund={setFund} fund={fund}/>
          <BidAmount setBidAmount={setBidAmount} bidAmount={bidAmount}/>
          <Status setStatus={setStatus} status={status}/>
          <Town setTown={setTown} town={town}/>
          <Radius setRadius={setRadius} radius={radius}/>
          <ButtonBox>
            <Link className="form__button form__button--cancel" to="/">Cancel</Link>
            <Button buttonSize="primary" buttonType="submit">Edit</Button>
          </ButtonBox>
        </Form>
    </div>
  )
}

export default EditCampaign
