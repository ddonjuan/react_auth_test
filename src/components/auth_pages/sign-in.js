import React, { Component } from 'react';
import InputField from '../helpers/inputs/inputs';
import { MyContext } from '../config/firebase';
import { Link, withRouter } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     email: '',
        //     password: ''
        // }
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    // handleInputChange(event) {
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    render() {
        console.log("this is the state of the sign in page: ", this.state)

        return (
            <form>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <div className="row d-flex justify-content-center">
                                <div className="logo">Company Name</div>
                            </div>
                            <div id="input-container" className="row d-flex justify-content-center">
                                <div id="sign-in" className="col-10 col-sm-4 col-md-10 col-lg-3">
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
                                    <Link className="" to="/reset-password">Forgot Password</Link>
                                    <Link className="create-new-account" to="create-account">Create a New Accoun</Link>
                                    <Link type="submit" to="/home" className="btn btn-primary">Submit</Link>
                                </div>

                            </div>
                        </React.Fragment>
                    )}

                </MyContext.Consumer>
            </form>
        )

    }

}

export default withRouter(SignIn);
