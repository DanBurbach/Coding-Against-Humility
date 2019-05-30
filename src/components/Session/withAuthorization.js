import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../../Firebase/context.js';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.LOG_IN);
                }
            });
        }

    render() {
        return this.props.authUser ? <Component /> : null;
    }
        //     return condition(this.props.authUser) ? ( <Component { ...this.props}/>
        //     ) : null;
        // }
    }

    const mapStateToProps = state => ({
        authUser: state.sessionState.authUser,
    });

    return compose(
        withRouter,
        withFirebase,
        connect(mapStateToProps),
    )(WithAuthorization);
};

export default withAuthorization;