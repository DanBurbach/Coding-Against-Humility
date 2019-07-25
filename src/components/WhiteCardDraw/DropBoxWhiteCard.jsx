import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

import '../../assets/styles/DropBoxWhiteCard.css';


class DropBoxWhiteCard extends Component {
  render() {
    const { name, id, isDropDisabled } = this.props;
    return (
      <div>
        <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
          {provided => {
            return (
              <div
                className="card-drop-area"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                  <Hero key={id} name={name} index={index} />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    )
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(DropBoxWhiteCard));



// function collect(connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget(),
//     name: monitor.getItem(),
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop()
//   }
// }

// class WhiteCardChosenBox extends Component {
//   render() {
//     const { connectDropTarget, canDrop, isOver } = this.props;

//     const isActive = canDrop && isOver;
//     return connectDropTarget(
//       <div className="card-drop-area">
//         {isActive ? "Release to drop" : "Drag a card here"}
//       </div>
//       );
//     }
// }

// export default DropTarget('card', {}, collect)(WhiteCardChosenBox);
