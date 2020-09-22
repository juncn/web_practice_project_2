import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Style
import './App.css';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug"  exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
