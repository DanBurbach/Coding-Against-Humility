import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import '../../assets/styles/DraggableWhiteCard.css';


const whiteCardSource = {
  beginDrag(props) {
    return ({name: props.name});
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.name.id);
  }
};

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    };};

class DraggableWhiteCard extends Component {
  render() {
    const { name, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const getStyle = isDragging => ({
      width: "10em",
      height: "16em",
      marginBottom: "1.5rem"
    });
    
    return connectDragSource(
      <div style={getStyle(isDragging, opacity)}>
      <div className='white-card-label-source'>
          {name}
        </div>
      </div>
    );
  }
}

export default DragSource('card', whiteCardSource, collect)(DraggableWhiteCard);


