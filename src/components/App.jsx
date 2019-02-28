// core imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// core navigation and return information
import Navigation from './Navigation';
import Error404 from './Error404';


// main splash page aka Home
import Main from './Main';

// outlying component pages

function App () {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainSplash} />
      </Switch>
    </div>
  );
}

export default App;
