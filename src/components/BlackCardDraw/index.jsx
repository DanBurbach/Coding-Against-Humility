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
      flipBlackCard: true,
    };
    this.handleDrawNewBlackCard = this.handleDrawNewBlackCard.bind(this);
    this.handleDealBlack = this.handleDealBlack.bind(this);
    this.handleFlipBlackCard = this.handleFlipBlackCard.bind(this);
  }

//there are 0-414 (415 total) black cards in the json deck

  handleDrawNewBlackCard = (event) => {
      event.preventDefault();
      this.handleFlipBlackCard();
      this.handleDealBlack();
  }

  handleDealBlack = () => {
      const blackCardData = require('../../../decks/BlackCards.json');
      const blackDeckSize = 414;
      const x = Math.floor(Math.random() * blackDeckSize);
      let [blackCardSlice] = blackCardData.slice(x, x+1);
      if (this.state.flipBlackCard === true) {
      this.setState({
        blackCard: blackCardSlice.text
      })
    }
  }

  handleFlipBlackCard = () => {
      this.setState(prevState => ({
        flipBlackCard: !prevState.flipBlackCard
      }));
       $(".blackCard").toggleClass("flipped");
    }

  render() {
    return (
      <div>
        <div className="item-wrapper">
          <div className="row">
            <div className="col">
              <div className="card-container">
                <div className="blackCard">
                  <div className="front">
                    <h1>Coding Against Humility</h1>
                  </div>
                  <div className="back">{this.state.blackCard}</div>
                </div>
              </div>
            </div>
          </div>
          <br/>
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
