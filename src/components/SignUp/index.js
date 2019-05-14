import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => ( 
    <div>
        <h1> SignUp </h1> 
        <SignUpForm/>
    </div>
);

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null,
        };
    this.handleSignUpFormSubmit = this.handleSignUpFormSubmit.bind(this);
    this.handleSignUpUpdate = this.handleSignUpUpdate.bind(this);

    }

    handleSignUpFormSubmit(event) {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    handleSignUpUpdate(event) {
        this.setState({[event.target.name]:  event.target.value});
    };

    render() {
        const { username, email, passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return ( 
            <form onSubmit = {this.handleSignUpFormSubmit} >
                <input name = "username" value = {username}
                    onChange = {this.handleSignUpUpdate} type = "text" placeholder = "Full Name" />
                <input name = "email" value = {email}
                    onChange = {this.handleSignUpUpdate} type = "text" placeholder = "Email Address" />
                <input name = "passwordOne" value = {passwordOne}
                    onChange = {this.handleSignUpUpdate} type = "password" placeholder = "Password" />
                <input name = "passwordTwo" value = {passwordTwo}
                    onChange = {this.handleSignUpUpdate} type = "password" placeholder = "Confirm Password" />
                <button disabled = {isInvalid} type = "submit" > Sign Up </button>

                {error && <p> {error.message}</p>} 
            </form>
            );
        }
    }

    const SignUpLink = () => ( 
        <p>Don 't have an account? 
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link> 
        </p>
    );

    const SignUpForm = compose( withRouter, withFirebase, )(SignUpFormBase);

    export default SignUpPage;

    export { SignUpForm, SignUpLink };