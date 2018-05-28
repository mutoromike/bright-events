import React from 'react';
import { Link } from 'react-router-dom';

export default props => <ul className="nav navbar-nav navbar-center dropdown ">
<li>
    <Link to="/home" className="page-scroll">Home</Link>
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

</ul>;
