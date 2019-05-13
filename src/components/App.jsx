import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import SignUp from './SignUp';
import LogIn from './LogIn';
import PasswordForget from './PasswordForget';
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';
import Header from './Header';
import Game from './Game';
import HeaderGameplay from './HeaderInfo/HeaderGameplay';
import Error404 from './Error404';

import '../assets/styles/Header.css';


import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';


import * as ROUTES from "./../constants/routes";
import Firebase from '../Firebase';
// import gameReducers from '../reducers';

const rrfConfig = {
  userProfile: 'gameInfo'
};

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // startNewGameView: gameReducers.startNewGameView
});

const initialState = {};

const config = {
  userProfile: 'gameInfo' // firebase root where user profiles are stored
  // enableLogging: false // enable/disable Firebase's database logging
};

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(Firebase, rrfConfig)
)(createStore);

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase, config)
  )
);
export { store };

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Provider store={store}>
            <Switch>
              <Route exact path={ROUTES.HOME} render={() => <Main />} />
              <Route exact path={ROUTES.SIGN_UP} render={() => <SignUp />} />
              <Route exact path={ROUTES.LOG_IN} render={() => <LogIn />} />
              <Route exact path={ROUTES.PASSWORD_FORGET} render={() => <PasswordForget />} />
              <Route
                path={ROUTES.NEW_GAME_FORM}
                render={() => <NewGameForm />}
              />
              <Route path={ROUTES.GAME_INFO} render={() => <Info />} />
              <Route
                path={ROUTES.GAME_FINEPRINT}
                render={() => <Fineprint />}
              />
              <Route path={ROUTES.MAIN_GAME} render={() => <Game />} />
              <Route
                path={ROUTES.MAIN_GAME_HEADER}
                render={() => <Header />}
              />
              <Route
                path={ROUTES.MAIN_GAME_GAMEPLAY}
                render={() => <HeaderGameplay />}
              />
              <Route component={Error404} />
            </Switch>
          </Provider>
        </HashRouter>
      </div>
    );
  }
}

export default App;
