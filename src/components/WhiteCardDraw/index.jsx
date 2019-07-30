import React, { Component } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import DraggableWhiteCard from './DraggableWhiteCard';
import _ from "lodash";

import '../../assets/styles/cardhand/cardhand.css';
import '../../assets/styles/DraggableWhiteCard.css';
import '../../assets/styles/dealWhiteCardButton.css';

class WhiteCardHand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumbers: [],
      usersHand: [],
      isDropDisabled: false
    };
    this.handleShowWhiteCardHand = this.handleShowWhiteCardHand.bind(this);
    this.handleDealWhiteCards = this.handleDealWhiteCards.bind(this);
  }

  handleShowWhiteCardHand = event => {
    event.preventDefault();
    this.handleDealWhiteCards();
  };

  handleDealWhiteCards = () => {
    //there are 0-1913 (1914 total) white cards in the json deck
    const whiteCardData = require(
      "../../../decks/WhiteCards.json"
    );    
    const whiteDeckSize = 1913;    
    let randomWhiteCardArray = [];
    const randomGeneratedNumber = randomWhiteCardArray.slice(0);
    let size = 1;
    let newWhiteCardNumberArray = [];
    let y = 0;

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

    let whiteCardSlice0 = [_.get((whiteCardData.slice(card0, card0 + 1)[0]),'text')];
    let whiteCardSlice1 = [_.get((whiteCardData.slice(card1, card1 + 1)[0]),'text')];
    let whiteCardSlice2 = [_.get((whiteCardData.slice(card2, card2 + 1)[0]),'text')];
    let whiteCardSlice3 = [_.get((whiteCardData.slice(card3, card3 + 1)[0]),'text')];
    let whiteCardSlice4 = [_.get((whiteCardData.slice(card4, card4 + 1)[0]),'text')];
    let whiteCardSlice5 = [_.get((whiteCardData.slice(card5, card5 + 1)[0]),'text')];
    let whiteCardSlice6 = [_.get((whiteCardData.slice(card6, card6 + 1)[0]),'text')];
    let whiteCardSlice7 = [_.get((whiteCardData.slice(card7, card7 + 1)[0]),'text')];
    let whiteCardSlice8 = [_.get((whiteCardData.slice(card8, card8 + 1)[0]),'text')];
    let whiteCardSlice9 = [_.get((whiteCardData.slice(card9, card9 + 1)[0]),'text')];    
    

    for (var count = 0; count <= 9; count++) {
      randomWhiteCardArray.push(Math.floor(Math.random() * whiteDeckSize));
    }
    this.setState({
      randomNumbers: randomWhiteCardArray
    });
    for (var i = 0; i < randomGeneratedNumber.length; i++) {
      if (i % size === 0) {
        y++;
      }
      if (!newWhiteCardNumberArray[y]) newWhiteCardNumberArray[y] = [];
      newWhiteCardNumberArray[y].push(randomGeneratedNumber[i]);
    }

    const usersHand = [...whiteCardSlice0, ...whiteCardSlice1,...whiteCardSlice2, ...whiteCardSlice3, ...whiteCardSlice4,...whiteCardSlice5, ...whiteCardSlice6, ...whiteCardSlice7,...whiteCardSlice8, ...whiteCardSlice9 ]
    
    this.setState({
      usersHand: usersHand
    })
  };

  render() {
    const { usersHand } = this.state;
    const whiteHandCards = usersHand.map((whitecard, index) => {
      return (
        <li key={index} className="card">
            <div className="card-face">
              <DraggableWhiteCard
                name= {whitecard}
                />
          </div>
        </li>
        )
      });

    return (
      <div>
        <button onClick={this.handleShowWhiteCardHand} id="dealWhiteCard">
          Deal White Cards
        </button>
        <br />
          <ul className="cards">
            {whiteHandCards}
          </ul>
      </div>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(WhiteCardHand));
