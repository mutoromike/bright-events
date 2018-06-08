import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import './App.css';
import MyEvents from './components/MyEvents/MyEvents';
import Header from './components/Header/Header';
import Events from './components/All/Events';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/Private/Private';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const App = () =>
        <Router history={history}>
        <div>
        < Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/events' component={Events}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <PrivateRoute path='/myEvents' component={MyEvents}/>
          <Route path='/home' component={Home} />
          <PrivateRoute path='/profile' component={Profile} />
        </Switch>
        </div>
        </Router>;


export default App;
