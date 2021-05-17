import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/templates/Home'
import AddCampaign from './components/templates/AddCampaign'
import EditCampaign from './components/templates/EditCampaign'
import Navigation from './components/organisms/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path='/' exact component={Home} />
          <AddCampaign path='/add' component={AddCampaign} />
          <EditCampaign path='/edit/:id' component={EditCampaign} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
