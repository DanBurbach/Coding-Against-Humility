import React, { Component } from "react";
import '../../assets/styles/JudgePlayer.css';

class JudgePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCard: []
    };
    this.handleDealBlack = this.handleDealBlack.bind(this);
  }

//there are 0-414 (415 total) black cards in the json deck

  handleDealBlack = (event) => {
      event.preventDefault();
      const blackCardData = require('../../../decks/BlackCards.json');
      const blackDeckSize = 414;
      let x = Math.floor(Math.random() * blackDeckSize);
      let blackCardSlice = blackCardData.slice(x, x+1);
      console.log(blackCardSlice);
      let blackSliceTest = blackCardSlice.toString();
      console.log('just a test for toString:' + blackSliceTest);
      


      // let blackCard = this.state.blackCard;
      // blackCard.push(blackCardSlice);
      this.setState(prevState => ({ 
        blackCard: [...prevState.blackCard, blackCardSlice]
      }));

      // this.setState({
      //   blackCard: this.state.blackCard.concat([blackCardSlice])
      // });

      console.log(this.state.blackCard);
      

  }

  render() {
    return (
      <div>
        {/* <div className="blackCardDelt">{this.state.blackCard}</div> */}
        <button onClick={this.handleDealBlack} id='dealBlackCard'>Deal</button>
      </div>
    );
  }
}
export default JudgePlayer;
