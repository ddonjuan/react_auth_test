import React, { Component } from 'react';
import InputField from '../helpers/inputs/inputs';
import { MyContext } from '../config/firebase';

class ResetPassword extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <form onSubmit={(e)=>{e.preventDefault(); context.resetPassword()}}>
                            <h1>Reset Password</h1>
                            <div id="input-container" className="row d-flex justify-content-center">
                                <div id="sign-in" className="col-10 col-sm-4 col-md-6 col-lg-3">

                                    <InputField
                                        onChange={context.handleInputChange}
                                        labelName="Email"
                                        value={context.state.email}
                                        inputID="email"
                                        inputType="email"
                                        smallText="Please enter email associated with the account"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Reset Password</button>
                        </form>
                    </React.Fragment>
                )}

            </MyContext.Consumer>
        )
    }
}
export default ResetPassword;