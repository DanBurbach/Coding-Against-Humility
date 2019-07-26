import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import '../../assets/styles/DropBoxWhiteCard.css';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    name: monitor.getItem(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class DropBoxWhiteCard extends Component {
  render() {
    const { name, connectDropTarget, canDrop, isOver } = this.props;

    const isActive = canDrop && isOver;
    return (connectDropTarget(
          <div className="card-drop-area">
            {isActive ? "Release to drop" : "Drag a card here"}
            {name}
          </div>
        )
    );
}}

export default DropTarget('card', {}, collect)(DropBoxWhiteCard);