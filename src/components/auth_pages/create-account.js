import React, { Component } from 'react';
import InputField from '../helpers/inputs/inputs';
import { MyContext } from '../config/firebase';
import { withRouter } from 'react-router-dom';
import "../../stylesheets/auth_pages/helpers.css";
import "../../stylesheets/auth_pages/sign-in.css";

class SignUp extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <form className="sign-in-container auth-pages-picture" onSubmit={(e) => { e.preventDefault(); context.signUp() }}>
                            <div className="info-parent-container">

                                <div className="row d-flex justify-content-center">
                                    <div className="logo">Create An Account</div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div id="sign-in" className="col-10 col-sm-4 col-md-8 col-lg-6">
                                        <InputField onChange={context.handleInputChange} value={context.email} labelName="Email" inputID="email" inputType="email" smallText="Please enter your email" />
                                        <InputField onChange={context.handleInputChange} value={context.password} labelName="Choose your password" inputID="password" inputType="password" smallText="Please enter your chosen password" />
                                        <InputField onChange={context.handleInputChange} value={context.confirmPassword} labelName="Confirm your password" inputID="confirmPassword" inputType="password" smallText="Please confirm your password" />
                                        <button type="submit" className="btn btn-primary">Create Account</button>
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
export default withRouter(SignUp);