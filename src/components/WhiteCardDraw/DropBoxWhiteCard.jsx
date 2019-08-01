import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import '../../assets/styles/DropBoxWhiteCard.css';
import '../../assets/styles/DraggableWhiteCard.css';


class DropBoxWhiteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, connectDropTarget, canDrop, isOver } = this.props;

    const isActive = canDrop && isOver;
    
    return connectDropTarget(
      <div className='card-drop-area'>
        {isActive ? 'Release to drop' : 'Drag a card here'}
        <div className='white-card-label-source'>
          <div>{name}</div>
        </div>
      </div>
    );
  }
}

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    props.onDrop(item, props.id);
    return item;
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    name: monitor.getItem(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

export default DropTarget('card', spec, collect)(DropBoxWhiteCard);