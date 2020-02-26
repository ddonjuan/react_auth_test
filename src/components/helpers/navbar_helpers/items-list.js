import React, { Component } from 'react';

class ItemsList extends Component {
    constructor(props) {
        super(prrops);

    }
    renderItems(){
        const {itemNumber} = this.props;

        
    }
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        )
    }
}
export default ItemsList;