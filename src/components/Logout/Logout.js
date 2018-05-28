import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { headers } from '../../constants/common';


class Logout extends Component {
    state = {
      message: '',
      redirect: false
    }

    logoutUser = () => {
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v2/auth/logout',
        headers
      }).then((resp) => {
        // console.log(resp);
        toast.success(resp.data.message);
        localStorage.removeItem('Token');
        localStorage.clear();
        // console.log('you have been logged out');
        this.setState({ redirect: true });
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
        toast.error(err.response.data.message);
      });
    }

    render() {
      if (this.state.redirect) {
        return (<Redirect to={'/login'}/>);
      }

      return (
            <div>
                <ToastContainer
                hideProgressBar={true}
                newestOnTop={true}
                autoClose={3000}
                />
            </div>
      );
    }
}

export default Logout;
