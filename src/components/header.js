import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
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
                    <ul className="nav navbar-nav navbar-center">
                        <li>
                            <Link to="/" className="page-scroll">Home</Link>
                        </li>
                        <li>
                            <Link to="/events" className="page-scroll">Events</Link>
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