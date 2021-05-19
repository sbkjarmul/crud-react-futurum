import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import '../../App.css'
import Title from '../atoms/Title'
import Form from '../organisms/Form'
import CampaignName from '../molecules/CampaignName'
import Keywords from '../molecules/Keywords'
import CampaignFund from '../molecules/CampaignFund'
import BidAmount from '../molecules/BidAmount'
import Status from '../molecules/Status'
import Town from '../molecules/Town'
import Radius from '../molecules/Radius'
import ButtonBox from '../molecules/ButtonBox'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import { GlobalContext } from '../../context/GlobalContext'

const AddCampaign = () => {
  const { addCampaign } = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [fund, setFund] = useState(0.0);
  const [bidAmount, setBidAmount] = useState(0.0);
  const [status, setStatus] = useState(Boolean);
  const [town, setTown] = useState('');
  const [radius, setRadius] = useState(0.0);
  const history = useHistory();

  const onSubmit = () => {
    const newCampaign = {
      name,
      keywords,
      fund,
      bid_amount: bidAmount,
      status,
      town: town === '' ? 'Chicago' : town,
      radius
    };
  
    addCampaign(newCampaign);
    history.push('/');
  }

  return (
    <div className="home">
      <Title>Add Campaign</Title>
      <Form onSubmit={onSubmit}>
        <CampaignName setName={setName} />
        <Keywords setKeywords={setKeywords} />
        <CampaignFund setFund={setFund} />
        <BidAmount setBidAmount={setBidAmount} />
        <Status setStatus={setStatus} />
        <Town setTown={setTown} />
        <Radius setRadius={setRadius} />
        <ButtonBox>
          <Link className="form__button form__button--cancel" to="/">Cancel</Link>
          <Button buttonSize="primary" buttonType="submit">Add</Button>
        </ButtonBox>
      </Form>
    </div>
  )
}

export default AddCampaign;