import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
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

    //     componentDidMount() {
    //         firebase.auth().onAuthStateChanged(authUser => {authUser ? this.setState(authUser) : this.setState(null);
    //     });
    //   }

    componentDidMount() {
        this.listener = firebase.auth().onAuthStateChanged(
            authUser => {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                this.props.onSetAuthUser(authUser);
            },
            () => {
                localStorage.removeItem('authUser');
                this.props.onSetAuthUser(null);
            },
        );
    }

    componentWillUnmount() {
        this.listener();
    }
        
        render() {
            return ( <AuthUserContext.Provider value = { this.state.authUser }>
                <Component { ...this.props }/> 
                </AuthUserContext.Provider>
            );
        }
    }

const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser =>
        dispatch({ type: 'AUTH_USER_SET', authUser }),
});

return compose(withFirebase,
    connect( null, mapDispatchToProps,),
)(WithAuthentication);
};

export default withAuthentication;
