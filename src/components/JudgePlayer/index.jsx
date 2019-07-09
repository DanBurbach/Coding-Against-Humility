import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { firebaseConnect, populate } from 'react-redux-firebase';
import '../../assets/styles/JudgePlayer.css';
import '../../assets/styles/BlackDeckDisplay.css';

class JudgePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCard: [],
    };
    this.handleDealBlack = this.handleDealBlack.bind(this);
  }

//there are 0-414 (415 total) black cards in the json deck

  handleDealBlack = (event) => {
      event.preventDefault();
      const blackCard = this.state.blackCard;
      const blackCardData = require('../../../decks/BlackCards.json');
      const blackDeckSize = 414;
      const x = Math.floor(Math.random() * blackDeckSize);
      let [blackCardSlice] = blackCardData.slice(x, x+1);

      this.setState({
        blackCard: blackCardSlice.text
      })
      console.log(' Current Black Card: ' + blackCard);
  }

  render() {
  return (
    <div>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
          <div className='blackcard-card'>
            <div className='blackcard-container'>
              <div className='blackcard-front blackcard-side'>
                <div className='blackcard-content'>
                  <h1>Coding Against Humility</h1>
                </div>
              </div>
              <div className='blackcard-back blackcard-side'>
                <div className='blackcard-content'>
                  <h1>{this.state.blackCard}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'></div>
      </div>
    <button onClick={this.handleDealBlack} id='dealBlackCard'>Deal</button>
    </div>
    )
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(JudgePlayer));
