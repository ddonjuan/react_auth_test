import React, { Component } from 'react';
import InputField from '../helpers/inputs/inputs';
import { MyContext } from '../config/firebase';
import "../../stylesheets/auth_pages/helpers.css";
import "../../stylesheets/auth_pages/sign-in.css";

class ResetPassword extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <form className="sign-in-container auth-pages-picture" onSubmit={(e) => { e.preventDefault(); context.resetPassword() }}>
                            <div className="info-parent-container">

                                <div className="row d-flex justify-content-center">
                                    <h2 className="logo">Reset Password</h2>
                                </div>
                                <div id="input-container" className="row d-flex justify-content-center">
                                    <div id="sign-in" className="col-10 col-sm-4 col-md-8 col-lg-6">
                                        <InputField
                                            onChange={context.handleInputChange}
                                            labelName="Email"
                                            value={context.state.email}
                                            inputID="email"
                                            inputType="email"
                                            smallText="Please enter email associated with the account"
                                        />
                                                                            <button type="submit" className="btn btn-primary">Reset Password</button>

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
export default ResetPassword;