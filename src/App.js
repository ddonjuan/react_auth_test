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
      userNav: false
    }
    this.toggleUserNavbar = this.toggleUserNavbar.bind(this);
    this.toggleLandingNavbar = this.toggleLandingNavbar.bind(this);
  }
  // componentDidMount(){
  //   console.log("this is the history: ", this.props.history)

  // }
  // componentDidUpdate(){
  //   console.log("this is the history: ", this.props.history)
  //   if(this.props.history.location.pathname === "/home"){
  //     this.setState({

  //     })
  //   }
  // }
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
  render() {
    const navbarToggle = this.state.userNav ? <UserNav/> : <LandingNav/>;
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
