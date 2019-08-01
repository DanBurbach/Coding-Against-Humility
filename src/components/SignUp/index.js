import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase';
import firebase from "firebase/app";
import { withFirebase } from '../../Firebase';

import * as ROUTES from '../../constants/routes';

import '../../assets/styles/signInButton.css';

const SignUpPage = () => ( 
    <div className = "wrapper fade-in">
            <div className="mainstyles">
                <h2>SignUp</h2> 
                <SignUpForm/>
        </div>
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: true,
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `An account with this E-Mail address already exists. Try to login with this account instead. If you think the account is already used from one of the social logins, try to sign in with one of them. Afterward, associate your accounts on your personal account page.`;

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    handleSignUpFormSubmit = event => {
            event.preventDefault();            
            const { email, passwordOne, username } = this.state;

            firebase.auth()
            .createUserWithEmailAndPassword(email, passwordOne)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification()
            })
            .then(() => {
                    firebase.auth().currentUser.updateProfile({
                        displayName: username,
                    })
                })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }
                this.setState({
                    error
                });
            });
        this.props.history.push(ROUTES.LOG_IN);
    };

    handleSignUpUpdate = event => {
        this.setState({[event.target.name]:event.target.value})

    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return ( 
            <form onSubmit = {this.handleSignUpFormSubmit}>
                <div className="sign-in-form-master">
                    <div className="sign-in-form-child">
                        <input name = "username"
                            value = {username}
                            onChange = {this.handleSignUpUpdate} type = "text"
                            id = "username"
                            placeholder = "In-Game Name"/>
                    </div>
                    <div className = "sign-in-form-child">
                        <input name = "email" 
                            value = {email}
                            onChange = {this.handleSignUpUpdate} type = "text" 
                            placeholder = "Email Address"/>
                    </div>
                    <div className = "sign-in-form-child">
                        <input name = "passwordOne" 
                            value = {passwordOne}
                            onChange = {this.handleSignUpUpdate} type = "password" 
                            placeholder = "Password"/>
                    </div>
                    <div className = "sign-in-form-child" >
                        <input name = "passwordTwo" 
                            value = {passwordTwo}
                            onChange = {this.handleSignUpUpdate} type = "password" 
                            placeholder = "Confirm Password" />
                    </div>
                <div className="sign-in-form-child">
                    <button className= "signIn" disabled = {isInvalid} type = "submit" > Sign Up </button>
                </div>
                <div className = "sign-in-form-child" >
                    <Link to={ROUTES.HOME}>Cancel</Link>
                </div>
                    {error && <p> {error.message}</p>} 
                </div>
            </form>
        );
    }
}

const SignUpLink = () => ( 
    <p>
        Don 't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link> 
    </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const enhance = connect(
    ({ firebase: { auth, profile } }) => ({ auth, profile})
)

export default firebaseConnect()(enhance(SignUpPage));

export { SignUpForm, SignUpLink };