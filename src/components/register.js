import React, { Component } from 'react';

class Register extends Component {
  
  render() {
    return (
      <div className="container page-content">
      <br />
        <br />
        <br />
        <br />
          <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-login">
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
                              <form id="register-form" action="" method="post" role="form">
                                  <div className="form-group">
                                      <input type="text" ref="username" id="username" tabIndex="1" className="form-control" placeholder="Username" required />
                                  </div>
                                  <div className="form-group">
                                      <input type="email" ref="email" id="email" tabIndex="2" className="form-control" placeholder="Email Address" value="" required />
                                  </div>
                                  <div className="form-group">
                                      <input type="password" ref="password" id="password" tabIndex="3" className="form-control" placeholder="Password" required />
                                  </div>
                                  <div className="form-group">
                                      <input type="password" ref="confirm-password" id="confirm-password" tabIndex="4" className="form-control" placeholder="Confirm Password"
                                          required />
                                  </div>
                                  <div className="form-group">
                                      <div className="row">
                                          <div className="col-sm-6 col-sm-offset-3">
                                              <input type="submit" ref="register-submit" id="register-submit" tabIndex="5" className="form-control btn btn-register" value="Register Now" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-group text-center">
                              <a href="" className="forgot-password">Already have an account?Login</a>
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