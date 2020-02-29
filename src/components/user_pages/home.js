import React, { Component } from 'react';
import { MyContext } from '../config/firebase';

class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <button onClick={(e)=>{e.preventDefault(); context.signOut()}} type="submit" className="btn btn-primary">Sign Out</button>
                )}
            </MyContext.Consumer>
        )
    }
}
export default Home;