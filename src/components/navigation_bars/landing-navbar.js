import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/navbars/landing-navbar.css';

class LandingNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-dark bg-dark">
                <Link id="nav-brand" className="navbar-brand" to="/">Test Fire</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#about">Home</a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                    </div> 
                </div>

                <ul id="ul-links" className="navbar-nav">
                    <Link to="/sign-in"><button className="btn btn-outline-light">Login</button></Link>
                </ul>
            </nav>
        )
    }
}
export default withRouter(LandingNavbar);