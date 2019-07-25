import React from "react";
import { DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";
import '../../assets/styles/WhiteCardChosenBox.css';

const WhiteCardChosenBox = ({ canDrop, isOver, connectDropTarget, children }) => {
  
  const isActive = canDrop && isOver;

  return connectDropTarget(
    <div className="card-drop-area">
      {isActive ? "Release to drop" : "Drag a card here"}{children}
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
