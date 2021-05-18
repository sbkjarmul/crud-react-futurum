import React from 'react'
import CampaignList from '../organisms/CampaignList'
import Title from '../atoms/Title'

const Home = () => {
  return (
    <div className="home">
      <Title>Home</Title>
      <CampaignList />
    </div>
  )
}

export default Home;