import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { headers } from '../../constants/common';

class Register extends Component {
    state = {
      message: '',
      form: {
        username: '',
        email: '',
        password: '',
        cpassword: ''
      }
    }
    registerSubmit = (event) => {
      event.preventDefault(); // prevent form auto-reloads
      // console.log('Event: Form Submit', this.usernameInput.value);
      // axios.get('https://bright-events-api.herokuapp.com/api/v2/auth/register')
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v2/auth/register',
        headers,
        data: this.state.form
      }).then((resp) => {
        toast.success(resp.data.message);
        // resp.data
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
      return (
      <div className="container page-content">
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={6000}
        />
          <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-login" id="heading">
                  <div className="panel-heading">
                      <div className="row">
                          <div className="col-xs-12">
                              <a className="active" id="register-form-link">Register</a>
                          </div>
                      </div>
                      <hr />
                  </div>
                  {/* panel-heading */}
                  <div className="panel panel-body">
                      <div className="row">
                          <div className="col-lg-12">
                              <form id="register-form" onSubmit = { this.registerSubmit } method="post">
                                  <div className="input-group" style={{ marginBottom: 16 }}>
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i>
                                    </span>
                                      <input type="text"
                                      name='username'
                                      onChange = {this.onChange}
                                      className="form-control" placeholder="Username" required />
                                  </div>
                                  <div className="input-group" style={{ marginBottom: 16 }}>
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i>
                                    </span>
                                      <input type="email" className="form-control"
                                      name='email'
                                      onChange = {this.onChange}
                                      placeholder="Email Address" required />
                                  </div>
                                  <div className="input-group" style={{ marginBottom: 16 }}>
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i>
                                    </span>
                                      <input type="password" className="form-control"
                                      name='password'
                                      onChange = {this.onChange}
                                      placeholder="Password" required />
                                  </div>
                                  <div className="input-group" style={{ marginBottom: 16 }}>
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i>
                                    </span>
                                      <input type="password" className="form-control"
                                      name='cpassword'
                                      onChange = {this.onChange}
                                      placeholder="Confirm Password"
                                          required />
                                  </div>
                                  <div className="form-group">
                                      <div className="row">
                                          <div className="col-sm-6 col-sm-offset-3">
                                              <input type="submit" ref="register-submit" id="register-submit" className="form-control btn btn-primary" value="Register Now" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-group text-center">
                                  <Link to="/login" className="page-scroll">Already have an account?Login</Link>
                          </div>
                              </form>
                              {/* Register form */}
                          </div>
                          {/* col-lg-12 */}
                      </div>
                      {/* row */}
                  </div>
                  {/* panel-body */}
              </div>
              {/* panel-login */}
          </div>
          {/* col-md-offset-3 */}

      </div>
      /* Container */

      );
    }
}
export default Register;
