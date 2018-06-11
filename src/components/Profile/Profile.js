import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../App.css';
import { headers } from '../../constants/common';


class Profile extends Component {
    state={
      message: '',
      form: {
        npassword: '',
        cnfpassword: ''
      }
    }

    passwordReset = (event) => {
      const head = { ...headers, Authorization: localStorage.getItem('Token') };
      event.preventDefault(); // prevent form auto-reloads
      axios({
        method: 'put',
        url: 'http://localhost:8000/api/v2/auth/reset-password',
        headers: head,
        data: this.state.form
      }).then((resp) => {
        toast.success(resp.data.message);
        // resp.data
      }).catch((err) => {
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
                <div className="header" style={{ marginTop: 100 }}>
                  <ToastContainer
                  hideProgressBar={true}
                  newestOnTop={true}
                  autoClose={3000}
                  />
                    <div className="row container">
                      <div className="col-md-12">

                        <div className="row" style={{ position: 'center' }}>
                          <div className="col-md-8 col-md-offset-3" >
                            <div className="panel panel-info" id="heading">
                              <div className="panel-heading">
                                  <h2 className="panel-title"> Welcome: </h2>
                              </div>
                              <div className="panel-body panel-default" style={{ borderRadius: 0 }}>
                              <p> Here you get to reset your password when you feel like...</p>


                            <div className="mainbox col-md-8 col-md-offset-2">
                              <div className="panel panel-login">
                                  <div className="panel-heading">
                                      <div className="row">
                                          <div className="col-xs-12">
                                              <a className="active" id="register-form-link">Reset Password</a>
                                          </div>
                                      </div>
                                      <hr />
                                  </div>
                                  {/* panel-heading */}
                                  <div className="panel panel-body">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <form id="password-reset-form" onSubmit = { this.passwordReset } method="put">
                                                  <div className="input-group" style={{ marginBottom: 16 }}>
                                                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i>
                                                    </span>
                                                      <input type="password"
                                                      name='npassword'
                                                      onChange = {this.onChange}
                                                      className="form-control" placeholder="New Password" required />
                                                  </div>
                                                  <div className="input-group" style={{ marginBottom: 16 }}>
                                                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i>
                                                    </span>
                                                      <input type="password" className="form-control"
                                                      name='cnfpassword'
                                                      onChange = {this.onChange}
                                                      placeholder="Confirm Password" required />
                                                  </div>

                                                  <div className="form-group">
                                                      <div className="row">
                                                          <div className="col-sm-6 col-sm-offset-3">
                                                              <input type="submit" ref="register-submit" id="password-reset-submit"
                                                              className="form-control btn btn-primary" value="Change Password" />
                                                          </div>
                                                      </div>
                                                  </div>
                                              </form>
                                              {/* Password form */}
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

        );
      }
}

export default Profile;
