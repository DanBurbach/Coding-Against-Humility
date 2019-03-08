import React, { Component } from 'react';


class RadioGameLength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGameLength: '5'
    };
    this.handleLengthChoice = this.handleLengthChoice.bind(this);
  }

  handleLengthChoice(changeEvent) {
    this.setState({selectedGameLength: changeEvent.target.value});
  }

  handleGameLength(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    console.log('Your game length is:', this.state.selectedGameLength);
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <form onSubmit={this.handleGameLength}>

            <div className='form-check'>
              <label>
                <input
                  type='radio'
                  name='_gamelength'
                  value='5'
                  checked={this.state.selectedGameLength === '5'}
                  onChange={this.handleLengthChoice}
                  className='form-check-input'
                  />
                Short
              </label>
            </div>

            <div className='form-check'>
              <label>
                <input
                  type='radio'
                  name='_gamelength'
                  value='7'
                  checked={this.state.selectedGameLength === '7'}
                  onChange={this.handleLengthChoice}
                  className='form-check-input'
                  />
                Medium
              </label>
            </div>

            <div className='form-check'>
              <label>
                <input
                  type='radio'
                  name='_gamelength'
                  value='10'
                  checked={this.state.selectedGameLength === '10'}
                  onChange={this.handleLengthChoice}
                  className='form-check-input'
                  />
                Long
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default RadioGameLength;
