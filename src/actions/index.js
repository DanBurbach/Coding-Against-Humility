import firebase from '../Firebase';

export const newGame = props => {
  return async (dispatch) => {
    const userId = firebase.auth().currentUser.uid;
    await firebase.database().ref(`gameInfo/ + ${userId}`)
    .set({
      userName: props.userName,
      gameLength: props.gameLength,
      numberOfPlayers: props.numberOfPlayers,
      gameWins: props.gameWins
    });
  };
};

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
