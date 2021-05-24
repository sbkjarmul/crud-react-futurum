import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../App.css';
import Home from '../templates/Home'
import AddCampaign from '../templates/AddCampaign'
import EditCampaign from '../templates/EditCampaign'
import EmeraldAccount from '../atoms/EmeraldAccount'

const ContentBox = () => {
  return (
    <div className="content-box">
      <EmeraldAccount />
      <Switch>
        <Route path='/' exact component={Home} />
        <AddCampaign path='/add' component={AddCampaign} />
        <EditCampaign path='/edit/:id' component={EditCampaign} />
      </Switch>
    </div>
  )
}

export default ContentBox;
