import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

import '../../assets/styles/WhiteCardSourceBox.css';

const getStyle = isDragging => ({
  opacity: isDragging ? 0.4 : 1,
  display: "block",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  border: "1px dashed gray"
});

const WhiteCardSourceBox = ({ name, isDragging, connectDragSource }) => {
  return connectDragSource(
  <div style={getStyle(isDragging)}>
    <div className='white-card-label-source'>
        {name}
      </div>
    </div>
  );
};

export default DragSource(
  ItemTypes.CARD,
  {
    beginDrag: props => ({ name: props.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(WhiteCardSourceBox);
