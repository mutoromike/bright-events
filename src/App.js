import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MyEvents from './components/myEvents';
import Header from './components/header';
import Events from './components/events';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
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
        <Route path='/myEvents' component={MyEvents}/>
        <Route path='/home' component={Home} />
      </div>
    );
  }
}

export default App;
// A module can only contain one default export
