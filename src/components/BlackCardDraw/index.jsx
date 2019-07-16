import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import CSSTransition from "react-addons-css-transition-group";
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
    this.renderBlackCard = this.renderBlackCard.bind(this);
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
      this.setState({
        flipBlackCard: !this.state.flipBlackCard
      })
    }

  renderBlackCard = () => {
    return (
        <div className="blackcard-container">
          <div className="blackcard-front blackcard-side">
            <div className="blackcard-content">
              <h1>Coding Against Humility</h1>
            </div>
          </div>
          <div className="blackcard-back blackcard-side">
            <div className="blackcard-content-back">
              {this.state.blackCard}
            </div>
          </div>
        </div>
    );
  }

  render() {
    return (
      <div>
        <div className="item-wrapper">
          <div className="row">
            <div className="col-4" />
            <div className="col-4">
              <div className="container">
                <div className="animation-container">
                  {this.renderBlackCard()}
                </div>
              </div>
            </div>
            <div className="col-4" />
          </div>
          <button onClick={this.handleDrawNewBlackCard} id="dealBlackCard">
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
