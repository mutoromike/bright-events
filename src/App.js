import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Event from './components/event';
import Header from './components/header';
import Events from './components/events';
import Register from './components/register';
import Login from './components/login';
// import Intro from './components/landing';

class App extends Component {
  render() {
    return (
      <div>
        < Header />
        {/* < Intro /> */}
        <Route path='/events' component={Events}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/event' component={Event}/>
      </div>
    );
  }
}

export default App;
// A module can only contain one default export
