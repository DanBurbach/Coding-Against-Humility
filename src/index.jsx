import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

<<<<<<< HEAD

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
=======
const render = (App) => {
    ReactDOM.render(
     <App />,
    document.getElementById('root'));
>>>>>>> feature/refactor-attempt-react-redux-firebase
}

render(App)