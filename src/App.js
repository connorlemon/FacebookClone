import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/" component={NavBar} />
        <Route path="/main" component={Main} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
