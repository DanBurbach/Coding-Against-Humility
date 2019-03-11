import React from 'react';
import PropTypes from 'prop-types';
import NewGameForm from './Menu/NewGameForm';

function GameInfo(props) {
return (
    <div>
        Who's turn it is.
        Your score.
        Number of players.
    <a>{props._name}</a>
    </div>
    );
}


NewGameForm.propTypes = {
handleNewGameSubmission: PropTypes.func
}

export default GameInfo;