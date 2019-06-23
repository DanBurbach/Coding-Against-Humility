import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase';
import firebase from "firebase/app";
import { withFirebase } from '../../Firebase';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => ( 
    <div>
        <h1>SignUp</h1> 
        <SignUpForm/>
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
                // .then(authUser => {
                //     return this.props.firebase.user(authUser.user.uid).set({
                //         username,
                //         email
                //     });
                // })

                // .then(() => {
                //     this.setState({
                //         ...INITIAL_STATE
                //     });
                //     this.props.history.push(ROUTES.LOG_IN);
                // })


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
        this.setState({[event.target.name]:event.target.value});
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
                < input name = "username"
                    value = {username}
                    onChange = {this.handleSignUpUpdate} type = "text"
                    id = "username"
                    placeholder = "In-Game Name"/>
                <input name = "email" 
                    value = {email}
                    onChange = {this.handleSignUpUpdate} type = "text" 
                    placeholder = "Email Address"/>
                <input name = "passwordOne" 
                    value = {passwordOne}
                    onChange = {this.handleSignUpUpdate} type = "password" 
                    placeholder = "Password"/>
                <input name = "passwordTwo" 
                    value = {passwordTwo}
                    onChange = {this.handleSignUpUpdate} type = "password" 
                    placeholder = "Confirm Password" />
                <button disabled = {isInvalid} type = "submit" > Sign Up </button>

                {error && <p> {error.message}</p>} 
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