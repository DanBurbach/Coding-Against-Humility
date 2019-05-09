import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import {
  reactReduxFirebase,
  ReactReduxFirebaseProvider,
  firebaseReducer,
  getFirebase
} from 'react-redux-firebase';
import thunk from 'redux-thunk';

import firebase from './Firebase';
// import gameReducers from '../reducers';


import { default as App } from './components/App';

// const rrfConfig = {
//   userProfile: 'gameInfo'
// };

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // startNewGameView: gameReducers.startNewGameView
});

const config = {
  userProfile: 'gameInfo' // firebase root where user profiles are stored
  // enableLogging: false // enable/disable Firebase's database logging
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(firebase, config)
  )
);
export { store };

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch
// };

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
          <Component />
        {/* </ReactReduxFirebaseProvider> */}
      </Provider>
    </HashRouter>,
  document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
