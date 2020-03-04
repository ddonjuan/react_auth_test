import React, { Component } from 'react';
import InputField from '../helpers/inputs/inputs';
import { MyContext } from '../config/firebase';
import { Link, withRouter } from 'react-router-dom';
import "../../stylesheets/auth_pages/helpers.css";
import "../../stylesheets/auth_pages/sign-in.css";
class SignIn extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <form className="sign-in-container auth-pages-picture" onSubmit={(e) => { e.preventDefault(); context.signIn() }}>
                            <div className="info-parent-container">
                                <div className="row d-flex justify-content-center">
                                    <h2 className="logo">Login </h2>
                                </div>
                                <div id="input-container" className="row d-flex justify-content-center">
                                    <div id="sign-in" className="col-10 col-sm-4 col-md-8 col-lg-6">
                                        <InputField
                                            onChange={context.handleInputChange}
                                            labelName="Email"
                                            value={context.state.email}
                                            inputID="email"
                                            inputType="email"
                                            smallText="Please enter your email"
                                        />
                                        <InputField
                                            onChange={context.handleInputChange}
                                            labelName="Password"
                                            value={context.state.password}
                                            inputID="password"
                                            inputType="password"
                                            smallText="Please enter your password"
                                        />
                                        <div className="auth-btn-space"><Link to="/create-account">Sign Up</Link></div>
                                        <div className="auth-btn-space"><Link to="/reset-password">Forgot Password</Link></div>
                                        <button type="submit" className="btn btn-primary">Sign In</button>
                                    </div>

                                </div>
                            </div>

                        </form>

                    </React.Fragment>
                )}

            </MyContext.Consumer>
        )

    }

}

export default SignIn;
