import React from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'recompose';
import AuthUserContext from './AuthContext';
import firebase from '../../Firebase';
import { withFirebase } from '../../Firebase/context.js';

const withAuthentication = Component => {
    class WithAuthentication extends Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: firebase.auth().currentUser,
            };
        }

        componentDidMount() {
            firebase.auth().onAuthStateChanged(authUser => {
                this.setState({ authUser });
            })
        }


        render() {
            return ( <AuthUserContext.Provider value = { this.state.authUser }>
                <Component { ...this.props }/> 
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;
