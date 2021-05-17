import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navigation from './components/organisms/Navigation';
import ContentBox from './components/pages/ContentBox'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <ContentBox />
      </Router>
    </div>
  );
}

export default App;
