import React, { useContext } from 'react'
import CampaignList from '../organisms/CampaignList'
import Title from '../atoms/Title'
import Loader from '../atoms/Loader'

const Home = () => {
  return (
    <div className="home">
      <Title>Home</Title>
      <CampaignList />
      <Loader />
    </div>
  )
}

export default Home;