// core imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// core navigation and return information
import Error404 from './Error404';


// main splash page aka Home
import Main from './Main';
import NewGame from './Menu/NewGame';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';

// outlying component pages

function App () {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route to path="/newgame" component={NewGame} />
        <Route to path="/info" component={Info} />
        <Route to path="/fineprint" component={Fineprint} />

        <Route to component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
