import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class LandingPage extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h1>Landing Page</h1>
            </div>
        )
    }
}
export default withRouter(LandingPage);