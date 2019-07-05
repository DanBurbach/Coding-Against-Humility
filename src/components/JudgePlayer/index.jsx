import React, { Component } from "react";

class JudgePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCard = 0
    };
    this.handleDealBlack = this.handleDealBlack.bind(this);
  }

  handleDealBlack = () => {

      // const rand = min + Math.random() * (max - min);
      // this.setState({ random: this.state.blackCard + rand });
  }

  render() {
    return (
      <div>
        {/* <div className="blackCardDelt">{this.state.blackCard}</div> */}
        <button onClick={this.handleDealBlack}>Deal</button>
      </div>
    );
  }
}
export default JudgePlayer;
