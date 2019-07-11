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
      randomNumber: [],
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
    // this.handleRandomNumber = this.handleRandomNumber.bind(this);
    this.handleDealWhiteCards = this.handleDealWhiteCards.bind(this);
  }
  
  //there are 0-1913 (1914 total) black cards in the json deck
  
  handleShowWhiteCardHand = event => {
    event.preventDefault();
    // this.handleRandomNumber();
    this.handleDealWhiteCards();
  };
  
  // handleRandomNumber = () => {
  //   var randomWhiteCardArray = [];
  //   const whiteDeckSize = 1913;
  //   for (var count = 0; count <= 9; count++) {
  //     randomWhiteCardArray.push(Math.floor(Math.random() * whiteDeckSize)
  //     );
  //   }
  //   this.setState({
  //     randomNumber:randomWhiteCardArray
  //   })
  // };

  handleDealWhiteCards = () => {
    var randomWhiteCardArray = [];
    const whiteCardData = require('../../../decks/WhiteCards.json');
    const whiteDeckSize = 1913;
    // const x = Math.floor(Math.random() * whiteDeckSize);
    for (var count = 0; count <= 9; count++) {
      randomWhiteCardArray.push(Math.floor(Math.random() * whiteDeckSize));
    }
    this.setState({
      randomNumber: randomWhiteCardArray
    });

    console.log(this.state);
    
    const randomCardNumber = randomWhiteCardArray.slice(0);
    let [whiteCardSlice] = whiteCardData.slice(randomCardNumber, randomCardNumber + 1
    );


    console.log(randomCardNumber);
    console.log(whiteCardSlice);

    this.setState({
      whiteCard0: whiteCardSlice.text,
      whiteCard1: whiteCardSlice.text,
      whiteCard2: whiteCardSlice.text,
      whiteCard3: whiteCardSlice.text,
      whiteCard4: whiteCardSlice.text,
      whiteCard5: whiteCardSlice.text,
      whiteCard6: whiteCardSlice.text,
      whiteCard7: whiteCardSlice.text,
      whiteCard8: whiteCardSlice.text,
      whiteCard9: whiteCardSlice.text
    });
    console.log('sliced white card 1: ' + this.state.whiteCard0);
    console.log("sliced white card 2: " + this.state.whiteCard1);
    console.log("sliced white card 3: " + this.state.whiteCard2);
    console.log("sliced white card 4: " + this.state.whiteCard3);
    console.log("sliced white card 5: " + this.state.whiteCard4);
    console.log("sliced white card 6: " + this.state.whiteCard5);
    console.log("sliced white card 7: " + this.state.whiteCard6);
    console.log("sliced white card 8: " + this.state.whiteCard7);
    console.log("sliced white card 9: " + this.state.whiteCard8);
    console.log("sliced white card 10: " + this.state.whiteCard9);
    console.log(this.state);
    
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
