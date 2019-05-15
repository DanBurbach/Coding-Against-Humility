import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import Firebase, { FirebaseContext } from './Firebase';
import firebase from './Firebase';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // startNewGameView: gameReducers.startNewGameView
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(firebase)))
);

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
document.getElementById('react-app-root'));


/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => 
    render(App)
  );
}
/*eslint-enable */