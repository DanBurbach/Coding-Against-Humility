import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../assets/styles/dealBlackCardButton.css';
import '../../assets/styles/BlackDeckDisplay.css';

class BlackCardDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCard: [],
      flipBlackCard: false,
    };
    this.handleDrawNewBlackCard = this.handleDrawNewBlackCard.bind(this);
    this.handleDealBlack = this.handleDealBlack.bind(this);
    this.handleFlipBlackCard = this.handleFlipBlackCard.bind(this);
  }

//there are 0-414 (415 total) black cards in the json deck

  handleDrawNewBlackCard = (event) => {
    event.preventDefault();
    this.handleDealBlack();
    this.handleFlipBlackCard();
  }

  handleDealBlack = () => {
      const blackCardData = require('../../../decks/BlackCards.json');
      const blackDeckSize = 414;
      const x = Math.floor(Math.random() * blackDeckSize);
      let [blackCardSlice] = blackCardData.slice(x, x+1);

      this.setState({
        blackCard: blackCardSlice.text
      })
  }

  handleFlipBlackCard = () => {
      let cards = document.getElementsByClassName('blackcard-content-container');

      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (card.classList.contains('blackcard-back')) {
          card.classList.remove('blackcard-back');
        } else {
          card.classList.add('blackcard-back');
        }
      }
    }

  render() {
  return (
    <div className='item-wrapper'>
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
                <div className='blackcard-content-back'>
                  {this.state.blackCard}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'></div>
      </div>
    <button onClick={this.handleDrawNewBlackCard} id='dealBlackCard'>Deal Black Card</button>
    </div>
    )
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(BlackCardDraw));
