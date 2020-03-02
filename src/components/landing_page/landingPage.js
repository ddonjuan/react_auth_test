import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "../../stylesheets/landing_page/landing_page.css";

class LandingPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="landing-container">
                <div className="landing-pic">
                    <h1>Welcome to Test Fire</h1>
                    <button className="btn btn-outline-light">Learn More</button>
                </div>
                <div id="landing-content" className="container">
                    <div id="about">
                        <h2>About Test Fire</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae saepe, quidem officia pariatur animi rerum aut culpa 
                            veritatis optio hic modi voluptate, cupiditate repellendus neque quo 
                            assumenda reiciendis mollitia natus!
                        </p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae saepe, quidem officia pariatur animi rerum aut culpa 
                            veritatis optio hic modi voluptate, cupiditate repellendus neque quo 
                            assumenda reiciendis mollitia natus!
                        </p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae saepe, quidem officia pariatur animi rerum aut culpa 
                            veritatis optio hic modi voluptate, cupiditate repellendus neque quo 
                            assumenda reiciendis mollitia natus!
                        </p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae saepe, quidem officia pariatur animi rerum aut culpa 
                            veritatis optio hic modi voluptate, cupiditate repellendus neque quo 
                            assumenda reiciendis mollitia natus!
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
export default withRouter(LandingPage);