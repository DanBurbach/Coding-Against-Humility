import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(<App />,
    document.getElementById('react-app-root'));

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */