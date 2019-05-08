import React from 'react';
import Main from './Main';
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';
import Header from './Header';
import Game from './Game';
import HeaderGameplay from './HeaderInfo/HeaderGameplay';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import '../assets/styles/Header.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Main />} />
          <Route path='/newgameform' render={()=><NewGameForm />} />
          <Route path='/info' render={()=><Info />} />
          <Route path='/fineprint' render={()=><Fineprint />} />
          <Route path='/game' render={()=><Game />} />
          <Route path='/header' render={()=><Header />} />
          <Route path='/headergameplay' render={()=><HeaderGameplay />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  newGame: PropTypes.object
};

const mapStateToProps = state => {
  return {
    newGame: state.newGame
  };
};

export default withRouter(connect(mapStateToProps)(App));
