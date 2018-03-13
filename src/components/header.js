import React, {Component} from 'react';
import Events from './events'

const Route = ({ path, component }) => {
  const pathname = window.location.pathname;
  if (pathname.match(path)) {
    return (
      React.createElement(component)
    );
  } else {
    return null;
  }
};

class Header extends Component {

  render() {
    return (
      <div className="header clearfix">
        <nav className="navbar navbar-default navbar-fixed-top">
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
                    <ul className="nav navbar-nav navbar-center">
                        <li>
                            <a href="/" className="page-scroll">Home</a>
                        </li>
                        <li>
                            <a href="/api/v2/events" className="page-scroll">Events</a>
                        </li>
                        <li>
                            <a href="/api/v2/auth/register" className="page-scroll">Register</a>
                        </li>
                        <li>
                            <a href="/api/v2/auth/login" className="page-scroll">Login</a>
                        </li> 
                    </ul>                    
                </div>                                
            </div>            
        </nav>
        {/* <Events /> */}
        <Route path='/atlantic' component={Atlantic} />
        <Route path='/pacific' component={Pacific} />
    </div>
    );
  }
}

export default Header;