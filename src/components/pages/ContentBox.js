import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../App.css';
import Home from '../templates/Home'
import AddCampaign from '../templates/AddCampaign'
import EditCampaign from '../templates/EditCampaign'

const ContentBox = () => {
  return (
    <div className="content-box">
      <Switch>
        <Route path='/' exact component={Home} />
        <AddCampaign path='/add' component={AddCampaign} />
        <EditCampaign path='/edit/:id' component={EditCampaign} />
      </Switch>
    </div>
  )
}

export default ContentBox;
