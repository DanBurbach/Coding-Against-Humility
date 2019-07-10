import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import "../../assets/styles/cardhand/cardhand.css";
import '../../assets/styles/dealWhiteCardButton.css';

class WhiteCardHand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteCard: [],
      // dealWhiteCard: false
    };
    this.handleShowWhiteCardHand = this.handleShowWhiteCardHand.bind(this);
    this.handleDealWhiteCards = this.handleDealWhiteCards.bind(this);
  }

  //there are 0-414 (415 total) black cards in the json deck

  handleShowWhiteCardHand = event => {
    event.preventDefault();
    this.handleDealWhiteCards();
  };

  handleDealWhiteCards = () => {
    const whiteCardData = require("../../../decks/WhiteCards.json");
    const blackDeckSize = 414;
    const x = Math.floor(Math.random() * blackDeckSize);
    let [whiteCardSlice] = whiteCardData.slice(x, x + 1);

    this.setState({
      whiteCard: whiteCardSlice.text
    });
  };


  render() {
    // const { whiteCard } = this.state;
    return (
      <div>
        <button onClick={this.handleShowWhiteCardHand} id="dealWhiteCard">
          Deal
        </button>
        <div className="cards">
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-face">
              <div className="card-label">{this.state.whiteCard}</div>
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
