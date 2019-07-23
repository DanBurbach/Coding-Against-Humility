import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

import '../../assets/styles/WhiteCardSourceBox.css';

const getStyle = isDragging => ({
	width: '10em',
  height: '16em',
  borderRadius: '0.8em',
  marginBottom: "1.5rem",
  border: "1px dashed gray",
  zIndex: '11',
});

const WhiteCardSourceBox = ({ name, isDragging, connectDragSource }) => {
  const opacity= isDragging ? 0.4 : 1;
  return connectDragSource(
  <div style={getStyle(isDragging, opacity)}>
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
