import React from "react";
import { DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";
import '../../assets/styles/WhiteCardChosenBox.css';

const WhiteCardChosenBox = ({ canDrop, isOver, connectDropTarget }) => {
  
  const isActive = canDrop && isOver;

  return (
    <div className="card-drop-area" ref={connectDropTarget}>
      {isActive ? "Release to drop" : "Drag a card here"}
    </div>
  );
};

export default DropTarget(
  ItemTypes.CARD,
  { drop: () => ({ name: "WhiteCard Play Area" })},
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(WhiteCardChosenBox);
