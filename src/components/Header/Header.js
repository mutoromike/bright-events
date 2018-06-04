import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { headers } from '../../constants/common';
import LoggedInMenu from './../Login/LoggedInMenu';
import VisitorMenu from './../Login/VisitorMenu';

const header = { ...headers, Authorization: localStorage.getItem('Token') };
class Header extends Component {
  state = {
    message: '',
    redirect: false
  }


  logoutUser = (event) => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/v2/auth/logout',
      header
    }).then((resp) => {
      toast.success(resp.data.message);
      localStorage.removeItem('Token');
      this.props.history.push('/login');
    }).catch((err) => {
      // toast.error('An error occured!');
      console.log('the error is ,', err);
    });
  }

  render() {
    const isAuth = (!!localStorage.getItem('Token'));
    if (this.state.redirect) {
      return (<Redirect to={'/header'}/>);
    }
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navigation" aria-expanded="false">
              <span className="sr-only navbar-right">Toggle nav</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Bright Events</a>
        </div>
        <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={3000}
        />
        <div className="navbar-right navbar-collapse" id="main-navigation">
        <form className="navbar-form navbar-left" action="">
        <div className="col-lg-12">
    <div className="input-group">
      <input type="text" className="form-control" aria-label="..." placeholder="Search"/>
      <div className="input-group-btn">
                  <button className="btn btn-primary" type="submit"><i className="glyphicon glyphicon-search"></i></button>
              </div>
      </div>
      </div>
        </form>
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
    );
  }
}


export default withRouter(Header);

// withRouter has been used because "push" has been called
