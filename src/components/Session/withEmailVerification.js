import React from 'react';
import AuthUserContext from './context';
import { withFirebase} from "../../Firebase";

const needsEmailVerification = authUser =>
    authUser &&
    !authUser.emailVerified &&
    authUser.providerData
        .map(provider => provider.providerId)
        .includes('password');

const withEmailVerified = Component => {
    class withEmailVerified extends React.Component {
        constructor(props){
            super(props);

            this.state = { isSent: false };
        }


        onSendAdminEmailVerification = () => {
            this.props.firebase.sendAdminEmailVerification()
                .then(() => this.setState({ isSent: true }));
        };

        render() {
            return(
              <AuthUserContext.Consumer>
                  {authUser =>
                      needsEmailVerification(authUser) ? (
                          <div>
                              {this.state.isSent ? (
                              <p>
                                Email Confirmation sent
                              </p>
                              ) : (
                              <p>
                                  Please verify your email
                              </p>
                              )}

                              <button type='button' onClick={this.onSendAdminEmailVerification} disabled={this.state.isSent}>
                                  Send Email
                              </button>
                          </div>
                          ) : (
                              <Component {...this.props} />
                              )
                  }
              </AuthUserContext.Consumer>
          );
        }
    }
    return withFirebase(withEmailVerified);
};

export default withEmailVerified;