import React, {useState, Component} from 'react';
import firebase from 'firebase';
import axios from 'axios';


export const MyContext = React.createContext();

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
const fire = firebase.initializeApp(config);

class MyProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.signOut = this.signOut.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetState = this.resetState.bind(this);
    }
    resetState(){
        this.setState({
            email: "",
            password: ""
        });
    }

    handleInputChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    signIn(event, email, password){
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u)=>{
            console.log("successful sign in: ", u);
            this.resetState();
            this.props.history.push("/home");

        }).catch((err)=>{
            console.log("an error has occured: " ,err);
        })
    }
    signOut(event){
        event.preventDefault();
        fire.auth().signOut().then((u)=>{
            console.log("You have successfully signed out: ", u);
            this.resetState();
            this.props.history.push("/sign-out");
        }).catch((err)=>{
            console.log("you have not signed out yet. Error has occured: ", err);
        })
    }
    signUp(event, email, password){
        event.preventDefault();

        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log("successfully created an account: ", u);
            this.resetState();
            this.props.history.push("/sign-in");
        }).catch((err) =>{console.log("error in signing up", err)});

    }
    resetPassword(event, email){
        event.preventDefault();
        
        fire.auth().sendPasswordResetEmail(email).then((u)=>{
            console.log("Email reset was successful: ", u);
            this.resetState();
            this.props.history.push("/password-reset");
        }).catch((err)=>{
            console.log("error has occurred: ", err);
        });
    }


    render(){
        console.log("This is the state in firebase context: ", this.state);
        return(
            <MyContext.Provider value={{
                state: this.state,
                handleInputChange: this.handleInputChange,
                signIn: this.signIn,
                signOut: this.signOut,
                signUp: this.signUp,
                resetPassword: this.resetPassword
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;