import React, {useState, Component} from 'react';

const MyContext = React.createContext();

class MyProvider extends Component{
    constructor(props){
        super(props);
        this.state= {

        }

    }
    render(){
        return(
            <MyContext.Provider>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;