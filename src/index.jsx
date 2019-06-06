import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import gameReducers from './reducers';

import firebase from 'firebase/app';

const rrfConfig = { userProfile: 'users' };

const store = createStore(
  gameReducers,
  compose(applyMiddleware(thunk.withExtraArgument(getFirebase)))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('react-app-root')
);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => 
    render(App)
  );
}
/*eslint-enable */
