import React from 'react';

function JudgePlayer({ dispatch }) {
  return (
    <div>
      <form onSubmit={e => {
          event.preventDefault();
          dispatch()
        }}></form>
      <button>Deal</button>
    </div>
  );
}

export default JudgePlayer;
