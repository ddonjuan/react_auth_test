import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignOut extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <h1>You have Signed Out</h1>
                <Link to="/sign-in">Login</Link>
            </div>
        )
    }
}
export default SignOut;