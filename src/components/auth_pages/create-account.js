import React, { Component } from 'react';
import InputField from '../helpers/inputs/inputs';
import { MyContext } from '../config/firebase';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     email: '',
        //     newPassword: ''
        // }
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    // handleInputChange(event){
    //     const {name, value} = event.target;  

    //     this.setState({
    //         [name] : value
    //     });
    // }
    // onSubmit(event){
    //     event.preventDefault();

    //     const {email, newPassword} = this.state;

    //     fire.auth().createUserWithEmailAndPassword(email, newPassword).then((u) => {
    //         console.log("successfully created an account: ", u);
    //         this.setState({
    //             email: '',
    //             newPassword: '',
    //             confirmPassword: ''
    //         });
    //         this.props.history.push(ROUTES.SIGN_IN);
    //     }).catch((err) =>{console.log("error in signing up", err)});

    // }

    render() {

        // const {email, newPassword, confirmPassword} = this.state;
        // console.log("this is the state in the sign up page: ", this.state);

        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <form onSubmit={(e)=>{e.preventDefault();context.signUp()}}>
                            <div className="row d-flex justify-content-center">
                                <div className="logo">Create An Account</div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div id="sign-in" className="col col-sm-6 col-md-6 col-lg-3">
                                    <InputField onChange={context.handleInputChange} value={context.email} labelName="Email" inputID="email" inputType="email" smallText="Please enter your email" />
                                    <InputField onChange={context.handleInputChange} value={context.password} labelName="Choose your password" inputID="password" inputType="password" smallText="Please enter your chosen password" />
                                    <InputField onChange={context.handleInputChange} value={context.confirmPassword} labelName="Confirm your password" inputID="confirmPassword" inputType="password" smallText="Please confirm your password" />
                                    <button type="submit" className="btn btn-primary">Create Account</button>
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