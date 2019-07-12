import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import '../../assets/styles/cardhand/cardhand.css';
import '../../assets/styles/dealWhiteCardButton.css';

class WhiteCardHand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumbers: [],
      whiteCard0: [],
      whiteCard1: [],
      whiteCard2: [],
      whiteCard3: [],
      whiteCard4: [],
      whiteCard5: [],
      whiteCard6: [],
      whiteCard7: [],
      whiteCard8: [],
      whiteCard9: []
      // dealWhiteCard: false
    };
    this.handleShowWhiteCardHand = this.handleShowWhiteCardHand.bind(this);
    this.handleDealWhiteCards = this.handleDealWhiteCards.bind(this);
  }
  
  //there are 0-1913 (1914 total) black cards in the json deck
  
  handleShowWhiteCardHand = event => {
    event.preventDefault();
    this.handleDealWhiteCards();
  };
  
  handleDealWhiteCards = () => {
    var randomWhiteCardArray = [];
    const whiteCardData = require('../../../decks/WhiteCards.json');
    const whiteDeckSize = 1913;    
    for (var count = 0; count <= 9; count++) {
      randomWhiteCardArray.push(Math.floor(Math.random() * whiteDeckSize));
    }
    this.setState({
      randomNumbers: randomWhiteCardArray
    });
    const randomGeneratedNumber = randomWhiteCardArray.slice(0);
    let size = 1;
    let newWhiteCardNumberArray = [];
    let y = 0;
    for (var i = 0; i < randomGeneratedNumber.length; i++) {
      if (i % size === 0) {
        y++;
      }
      if (!newWhiteCardNumberArray[y]) newWhiteCardNumberArray[y] = [];
      newWhiteCardNumberArray[y].push(randomGeneratedNumber[i]);
    }

    const card0 = this.state.randomNumbers[0];
    const card1 = this.state.randomNumbers[1];
    const card2 = this.state.randomNumbers[2];
    const card3 = this.state.randomNumbers[3];
    const card4 = this.state.randomNumbers[4];
    const card5 = this.state.randomNumbers[5];
    const card6 = this.state.randomNumbers[6];
    const card7 = this.state.randomNumbers[7];
    const card8 = this.state.randomNumbers[8];
    const card9 = this.state.randomNumbers[9];

    let [whiteCardSlice0] = whiteCardData.slice(card0, card0 + 1);
    let [whiteCardSlice1] = whiteCardData.slice(card1, card1 + 1);
    let [whiteCardSlice2] = whiteCardData.slice(card2, card2 + 1);
    let [whiteCardSlice3] = whiteCardData.slice(card3, card3 + 1);
    let [whiteCardSlice4] = whiteCardData.slice(card4, card4 + 1);
    let [whiteCardSlice5] = whiteCardData.slice(card5, card5 + 1);
    let [whiteCardSlice6] = whiteCardData.slice(card6, card6 + 1);
    let [whiteCardSlice7] = whiteCardData.slice(card7, card7 + 1);
    let [whiteCardSlice8] = whiteCardData.slice(card8, card8 + 1);
    let [whiteCardSlice9] = whiteCardData.slice(card9, card9 + 1);

    this.setState({
      whiteCard0: whiteCardSlice0.text,
      whiteCard1: whiteCardSlice1.text,
      whiteCard2: whiteCardSlice2.text,
      whiteCard3: whiteCardSlice3.text,
      whiteCard4: whiteCardSlice4.text,
      whiteCard5: whiteCardSlice5.text,
      whiteCard6: whiteCardSlice6.text,
      whiteCard7: whiteCardSlice7.text,
      whiteCard8: whiteCardSlice8.text,
      whiteCard9: whiteCardSlice9.text
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowWhiteCardHand} id='dealWhiteCard'>
          Deal White Cards
        </button>

        <div className='cards'>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard0}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard1}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard2}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard3}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard4}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard5}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard6}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard7}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard8}</div>
            </div>
          </div>
          <div className='card'>
            <div className='card-face'>
              <div className='card-label'>{this.state.whiteCard9}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(WhiteCardHand));
