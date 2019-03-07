import React from 'react';
import './Loader.css';
import { loaderStatus } from './../../Utils/utilities';

const LoadingContainer = (props) => {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='loader-title'>Coding Against Humility</div>
        <div class='lds-grid'>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingStatus: false
    };
  }

  componentWillMount() {
    loaderStatus.subscribe(result => {
      this.setState({ loadingStatus: result ? true : false });
    });
  }

  render() {
    const { loadingStatus } = this.state;
    return loadingStatus ? <LoadingContainer /> : null;
  }
}

export default Loader;
