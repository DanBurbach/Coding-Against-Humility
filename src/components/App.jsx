import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import SignInPage from './LogIn';
import SignUpPage from './SignUp';
import PasswordForgetPage from './PasswordForget';
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';
import Header from './Header';
import Game from './Game';
import HeaderGameplay from './HeaderInfo';
import Error404 from './ERROR404';

import * as ROUTES from '../constants/routes';
import { withAuthentication } from './Session';
// import withFirebaseAuth from 'react-auth-firebase';

import '../assets/styles/Header.css';


class App extends Component {
  render() {

    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Main} />
            <Route
              exact
              path={ROUTES.SIGN_UP}
              component={SignUpPage}
            />
            <Route
              exact
              path={ROUTES.LOG_IN}
              component={SignInPage}
            />
            <Route
              exact
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route
              exact
              path={ROUTES.NEW_GAME_FORM}
              component={NewGameForm}
            />
            <Route exact path={ROUTES.GAME_INFO} component={Info} />
            <Route
              exact
              path={ROUTES.GAME_FINEPRINT}
              component={Fineprint}
            />
            <Route exact path={ROUTES.MAIN_GAME} component={Game} />
            <Route
              exact
              path={ROUTES.MAIN_GAME_HEADER}
              component={Header}
            />
            <Route
              exact
              path={ROUTES.MAIN_GAME_GAMEPLAY}
              component={HeaderGameplay}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default withAuthentication(App);
