import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/navbars/landing-navbar.css';

class UserNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">USER NAV</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">Stats</a>
                        <a className="nav-item nav-link" href="#">Messages</a>
                    </div> 
                </div>
            </nav>
        )
    }
}
export default withRouter(UserNavbar);