import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LandingNav from './components/navigation_bars/landing-navbar';
import UserNav from './components/navigation_bars/user-navbar';
import LandingPage from './components/landing_page/landingPage';
import SignIn from './components/auth_pages/sign-in';
import SignOut from './components/auth_pages/sign-out';
import CreateAccount from './components/auth_pages/create-account';
import ResetPassword from './components/auth_pages/password-reset';
import Home from './components/user_pages/home';
import MyProvider, { MyContext } from './components/config/firebase';
import axios from 'axios';
import './stylesheets/App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      userNav: false,
      toggleLinks: false
    }
    this.toggleUserNavbar = this.toggleUserNavbar.bind(this);
    this.toggleLandingNavbar = this.toggleLandingNavbar.bind(this);
    this.toggleLandingLinksOff = this.toggleLandingLinksOff.bind(this);
    this.toggleLandingLinksOn = this.toggleLandingLinksOn.bind(this);

  }

  toggleUserNavbar(){
    this.setState({
      userNav: true
    });
  }
  toggleLandingNavbar(){
    this.setState({
      userNav: false
    });
  }
  toggleLandingLinksOff(){

      this.setState({toggleLinks: true});
    
  }
  toggleLandingLinksOn(){

    this.setState({toggleLinks: false});
  
}

  

  render() {
    const navbarToggle = this.state.userNav ? <UserNav/> : <LandingNav toggleLinks={this.state.toggleLinks} toggleLinksOn={this.toggleLandingLinksOn} toggleLinksOff={this.toggleLandingLinksOff}/>;
    console.log("this is the state of toggle: ", this.state.toggleLinks);
    return (
      <MyProvider toggleUserNav={this.toggleUserNavbar} toggleLandingNav={this.toggleLandingNavbar}>
        <div className="App container-fluid">
          {navbarToggle}
          <Route exact path="/" component={LandingPage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-out" component={SignOut} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/home" component={Home} />
        </div>
      </MyProvider>
    );
  }
}

export default withRouter(App);
