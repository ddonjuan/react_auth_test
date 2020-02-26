import React, { Component } from 'react';
import InputField from '../helpers/inputs/inputs';
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <h1>Reset Password</h1>
                <div id="input-container" className="row d-flex justify-content-center">
                    <div id="sign-in" className="col-10 col-sm-4 col-md-10 col-lg-3">

                        <InputField
                            onChange={this.handleInputChange}
                            labelName="Email"
                            value={this.state.email}
                            inputID="email"
                            inputType="email"
                            smallText="Please enter email associated with the account"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Reset Password</button>
            </form>
        )
    }
}
export default ResetPassword;