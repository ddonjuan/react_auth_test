import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingNav from './components/navigation_bars/landing-navbar';
import LandingPage from './components/landing_page/landingPage';
import SignIn from './components/auth_pages/sign-in';
import SignOut from './components/auth_pages/sign-out';
import CreateAccount from './components/auth_pages/create-account';
import ResetPassword from './components/auth_pages/password-reset';
import Home from './components/user_pages/home';
import MyProvider, { MyContext } from './components/config/firebase';
import './stylesheets/App.css';

console.log("this is the api key: ", process.env.REACT_APP_API_KEY);


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyProvider>
        <div className="App container-fluid">
          <LandingNav />
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

export default App;
