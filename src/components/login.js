import React, {Component} from 'react';

class Login extends Component {

  render() {
    return (
        <div className="container page-content">
        
            <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                
                {/* response */}        
                <div className="alert alert-success" role="alert" id="reg-alert">
                    {/* response here */}
                </div>        
                {/* end response */}

                {/* error */}        
                <div className="alert alert-danger" role="alert" id="reg-alert">
                    {/* error here */}
                </div>        
                {/* end error */}
        
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
                    <div style={{paddingTop: 30}} className="panel-body">
        
                        <form id="loginform" action="/api/v1/auth/login" method="post" className="form-horizontal" role="form">
        
                            <div style={{marginBottom: 25}} className="input-group ">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input type="username" className="form-control" ref="username" placeholder="Username" required />
                            </div>
        
                            <div style={{marginBottom: 25}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input type="password" className="form-control" ref="password" placeholder="Password " required />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-3">
                                        <input type="submit" className="form-control btn btn-login" value="Log In"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <a href="/api/v1/auth/register" className="forgot-password">Don't have an account?Register</a>
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