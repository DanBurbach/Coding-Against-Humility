import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import '../../assets/styles/DraggableWhiteCard.css';

class DraggableWhiteCard extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <WhiteCardSource key={name} name={name} />
      </div>
    );
  }
}

const whiteCardMovement = {
  beginDrag(props) {
    const item = { ...props };
    let whiteCard = jQuery.parseJSON(JSON.stringify(item.name));
    console.log(whiteCard);
    return <div>{whiteCard}</div>;
  },
  endDrag(props, monitor, component) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  }
}

const collect = (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  };

const WhiteCardSource = DragSource('card', whiteCardMovement, collect)(
  class extends Component {
    render() {
      const { name, isDragging, connectDragSource } = this.props;
      const opacity = isDragging ? 0.4 : 1;
      const style = {
        width: "10em",
        height: "16em",
        marginBottom: "1.5rem"
      };

      return connectDragSource(
        <div style={{...style, opacity}}>
          <div className="white-card-label-source">
            <div>{name}</div>
          </div>
        </div>
      );
    }
  }
);

export default DraggableWhiteCard;