import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import Event from './components/event';
export default () => {
 return (
   <BrowserRouter>
   <Route exact path='/' component={App}/>
   <Route path='/events' component={Events}/>
   <Route path='/register' component={Register}/>
   <Route path='/login' component={Login}/>
   </BrowserRouter>
 )
}