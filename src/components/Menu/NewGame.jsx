import React from 'react';

class NewGame extends React.Component {
  handleChange = event => {};

  render() {
    return (
      <div>
        <form>
          <p>Your Name:</p>
          <input type="text" name="username" /><br />

          <p>Number of players (between 2 and 5):</p>
          <input type='number' name='quantity' min='2' max='5' />

          <p>Game length:</p>
          <RadioGroup
            name='gamelength'
            value={this.props.length.gamelength}
            options={[
              { label: 'Short', value: '5' },
              { label: 'Medium', value: '7'},
              { label: 'Long', value: '10'}
            ]}
            onChange={this.handleChange}
            />

          <p><input type="submit" value="Submit"></input></p>
          <p><input type="reset"></input></p>
        </form>
      </div>
    );
  }
}

export default NewGame;
