import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { headers } from '../../constants/common';
import LoggedInMenu from './../Login/LoggedInMenu';
import VisitorMenu from './../Login/VisitorMenu';


class Header extends Component {
  state = {
    message: '',
    redirect: false,
    isLoggedIn: true
  }
  componentDidMount() {
    this.loggedIn = (!!localStorage.getItem('Token'));
    console.log('propare are ', this.props);
  }


  logoutUser = (event) => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/v2/auth/logout',
      headers
    }).then((resp) => {
      // console.log(resp);
      toast.success(resp.data.message);
      console.log('the local storager is now ', localStorage.getItem('Token'));
      this.setState({ isLoggedIn: false }, () => {
        localStorage.removeItem('Token');
        localStorage.clear();
        this.props.history.push('/login');
      });
    }).catch((err) => {
      // err.response.data\
      toast.error(err.response.data.message);
    });
  }

  render() {
    const isAuth = this.state.isLoggedIn;
    if (this.state.redirect) {
      return (<Redirect to={'/header'}/>);
    }
    return (
      // <div className="header clearfix">
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
              {
                isAuth ? (
                  <LoggedInMenu onLogout = { this.logoutUser}/>
                ) : (
                  <VisitorMenu />
                )
              }
              </div>
        </div>
        </nav>
    // </div>
    );
  }
}


export default withRouter(Header);
