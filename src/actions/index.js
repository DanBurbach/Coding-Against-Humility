// import * as ACTION_TYPES from '../constants/ActionTypes';

export const newGame = props => {
  return (dispatch, getState, firebase) => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`gameInfo/ + ${userId}`)
    .set({
      userName: props.userName,
      gameLength: props.gameLength,
      numberOfPlayers: props.numberOfPlayers,
      gameWins: props.gameWins
    });
  };
};

// export const userName = (ref, userName) => ({
//   type: ACTION_TYPES.USER_NAME,
//   ref,
//   userName
// });

// export function loginUser(email, password) {
//   return (dispatch) => {
//     dispatch({ type: LOGIN_USER });
//     return firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(user => loginUserSuccess(dispatch, user))
//       .catch(() => {
//         console.log('failed to sign in');
//         return;
//       });
//   };
// }
