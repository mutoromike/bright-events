import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';

export default () => (
   <BrowserRouter>
   <Route exact path='/' component={App}/>
   <Route path='/events' component={Events}/>
   <Route path='/myEvents' component={MyEvents}/>
   <Route path='/register' component={Register}/>
   <Route path='/login' component={Login}/>
   <Route path='/logout' component={Logout}/>
   </BrowserRouter>
 );
