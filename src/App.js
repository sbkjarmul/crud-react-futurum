import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navigation from './components/organisms/Navigation'
import ContentBox from './components/pages/ContentBox'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Navigation />
          <ContentBox />
        </Router>
       </GlobalProvider>
    </div>
  );
}

export default App;
