import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import seedData from './seed.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/" component={()=>{
          return <NavBar user={seedData.user} />
        }}/>
        <Route path="/" component={()=>{
          return <Main seedData={seedData} />
        }} />
      </div>
    </Router>
  );
}

export default App;
