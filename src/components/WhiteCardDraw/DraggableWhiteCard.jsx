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
    if (props.onBeginDrag) {
      props.onBeginDrag();
    }
    const item = { ...props };
    return (
        <div>
          {item.name}
        </div>);
  },
  endDrag(props, monitor) {
    if (props.onEndDrag) {
      props.onEndDrag();
    }
    let result = monitor.getDropResult();

    applyDropResult(props, result);
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
      const opacity = isDragging ? 0 : 1;
      const style = {
        width: "12em",
        height: "18em",
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