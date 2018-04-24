import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { headers } from '../constants/common';


class Login extends Component {
    state = {
      message: '',
      form: {
        email: '',
        password: '',
        redirect: false
      }
    }
    loginSubmit = (event) => {
      event.preventDefault(); // prevent form auto-reloads
      // console.log('Event: Form Submit', this.usernameInput.value);
      // axios.get('https://bright-events-api.herokuapp.com/api/v2/auth/register')
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v2/auth/login',
        headers,
        data: this.state.form
      }).then((resp) => {
        toast.success(resp.data.message);
        localStorage.setItem('Token', resp.data.access_token);
        if (resp.data.access_token) {
          console.log('You are logged in!!');
          this.setState({ redirect: true });
        } else {
          this.setState({ redirect: false });
          console.log('Login you idiot!');
        }
      }).catch((err) => {
        // err.response.data\
        toast.error(err.response.data.message);
      });
    }

    onChange = (event) => {
      const myState = this.state;
      myState.form[event.target.name] = event.target.value;
      this.setState(myState);
    }
    render() {
      const { form } = this.state;

      if (this.state.redirect) {
        return (<Redirect to={'/myEvents'}/>);
      }
      return (
        <div className="container page-content">
        <br />
        <br />
        <br />
        <br />
        <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={3000}
        />
            <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

                <div className="panel panel-login ">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-12">
                                <a className="active">Login</a>
                            </div>
                        </div>
                        <hr />
                    </div>
                    {/* panel-heading */}
                    <div style={{ paddingTop: 30 }} className="panel-body">
                        <form id="loginform" onSubmit = { this.loginSubmit } method="post" className="form-horizontal">

                            <div style={{ marginBottom: 25 }} className="input-group ">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i>
                                </span>
                                <input type="text" name='email' className="form-control"
                                onChange = {this.onChange} placeholder="Email" required />
                            </div>

                            <div style={{ marginBottom: 25 }} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input type="password" name='password' className="form-control"
                                onChange = {this.onChange} placeholder="Password " required />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-3">
                                        <input type="submit" className="form-control btn btn-login" value="Log In"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <Link to="/register" className="forgot-password">Don't have an account?Register</Link>
                            </div>
                        </form>
                    </div>
                    {/* panel-body */}
                </div>
                {/* panel panel-login */}
            </div>
            {/* loginbox */}
        </div>
        // {/* container */}
      );
    }
}

export default Login;
