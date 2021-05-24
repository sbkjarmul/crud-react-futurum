import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../App.css';
import Home from '../templates/Home'
import AddCampaign from '../templates/AddCampaign'
import EditCampaign from '../templates/EditCampaign'
import { GlobalContext, GlobalProvider } from '../../context/GlobalContext'

const ContentBox = () => {
  const { accountFunds, setAccountFunds } = useContext(GlobalContext);

  return (
    <div className="content-box">
      <p>Emerald account fund: { accountFunds }</p>
      <Switch>
        <Route path='/' exact component={Home} />
        <AddCampaign path='/add' component={AddCampaign} />
        <EditCampaign path='/edit/:id' component={EditCampaign} />
      </Switch>
    </div>
  )
}

export default ContentBox;
