import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
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
       $(".blackcard").toggleClass("flipped");
    }


  render() {
    return (
      <div>
        <div className="item-wrapper">
          <div className="row">
            <div className="col-4" />

            <button onClick={this.handleFlipBlackCard}>
              flip the card
            </button>
            <div className="card-container">
              <div className="blackCard">
                <div className="front">1</div>
                <div className="back">2</div>
              </div>
            </div>

            <div className="col-4">
              <div className="animation-container">
                <div className="blackcard-container">
                  <div className="blackcard-front">
                    <div className="blackcard-content-front">
                      <h1>Coding Against Humility</h1>
                    </div>
                  </div>
                  <div className="blackcard-back">
                    <div className="blackcard-content-back">
                      {this.state.blackCard}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4" />
          </div>
          <button onClick={this.handleFlipBlackCard} id="dealBlackCard">
            Deal Black Card
          </button>
        </div>
      </div>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(BlackCardDraw));
