// core imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// core navigation and return information
import Error404 from './Error404';

// loading screen
import LoadingScreen from '../components/LoadingScreen/Loading';

// main page
import Main from './Main';
import NewGame from './Menu/NewGame';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';

// outlying component pages
import Board from './Board';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // onShowLoading() {
  //   loaderStatus.next(true);
  //   setTimeout(() => {
  //     loaderStatus.next(false);
  //   }, 3000);
  // }


  render() {
    return (
      <div>
        <LoadingScreen />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route to path="/newgame" component={NewGame} />
          <Route to path="/info" component={Info} />
          <Route to path="/fineprint" component={Fineprint} />
          <Route to path="/board" component={Board} />
          <Route to component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
