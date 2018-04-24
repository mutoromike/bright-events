import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { headers } from '../constants/common';

class Header extends Component {

  state = {
    message: "",
    redirect: false
    }

  logoutUser = (event) => {
    event.preventDefault(); // prevent form auto-reloads
    axios({
        method:'post',
        url:'http://localhost:8000/api/v2/auth/logout',
        headers: headers
    }).then((resp) => {
        console.log(resp);
        toast.success(resp.data.message)
        localStorage.removeItem('Token')
        localStorage.clear();
        console.log("you have been logged out")
        this.setState({redirect: true});
        // if (resp.data.access_token){
        //     console.log("You are logged in dumbass!!");
        //     this.setState({redirect: true});
        // }
        // else{
        //     this.setState({redirect: true});
        //     console.log("Login you motherfucker!");
        // }
    }).catch((err) => {
        // err.response.data\
        toast.error(err.response.data.message)
    })
    }

  render() {
    if(this.state.redirect){
      return (<Redirect to={'/login'}/>)
    }
    return (
      <div className="header clearfix">
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid navbar-left">
        <ul className="nav navbar-nav navbar-center">
          <li>
            <h3 className="header" id="homeHeading"> Bright Events </h3>
          </li>
        </ul>
        </div>        
        <form className="navbar-form navbar-left" action="">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search event" />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
          </div>
        </form>
      <div className="container-fluid navbar-right">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navigation" aria-expanded="false">
              <span className="sr-only">Toggle nav</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
					  </button>
        </div>
                <div className="collapse navbar-collapse" id="main-navigation">
                    <ul className="nav navbar-nav navbar-center dropdown ">
                        <li>
                            <Link to="/home" className="page-scroll">Home</Link>
                        </li>
                        <li>
                            <Link to="/events" className="page-scroll">Events</Link>
                        </li>
                        <li>
                            <Link to="/myEvents" className="page-scroll">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="" className="page-scroll dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-user"></i>
                            </Link>
                        <ul className="dropdown-menu">
                          <li><a href="#">Dashboard</a></li>
                          <li><a href="#">Profile</a></li>
                          <li onClick={this.logoutUser}>Logout</li>
                        </ul>
                        </li> 
                        <li>
                            <Link to="/register" className="page-scroll">Register</Link>
                        </li>
                        <li>
                            <Link to="/login" className="page-scroll">Login</Link>
                        </li> 
                    </ul>                    
                </div>                                
            </div>            
        </nav>
    </div>
    );
  }
}
  

export default Header;