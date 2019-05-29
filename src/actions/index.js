import * as ACTION_TYPES from '../constants/ActionTypes';

export const newGame = props => {
  return (dispatch, getState, firebase) => {
    const userId = firebase.auth().currentUser.uid;
    this.props.firebase.database().ref(`gameInfo/${userId}`).set({
      userName: props.userName,
      gameLength: props.gameLength,
      numberOfPlayers: props.numberOfPlayers,
      gameWins: props.gameWins
    });
  };
};

export const userName = (ref, userName) => ({
  type: ACTION_TYPES.USER_NAME,
  ref,
  userName
});

export const getNameFromFb = (ref) => {
  return ((dispatch, state, getFirebase) => {
    const firebase = getFirebase();
    firebase.database().ref().once('value')
    .then(response=> {
      dispatch(userName(ref, response.val()));
    });
  });
};

    // firebase.database().ref().orderByKey().once('value')
    //   .then((childSnapshot) => {
    //     this.setState({
    //       userName: childSnapshot.val('gameInfo/userName')
    //     });
    //     let name_val = childSnapshot.val().userName;
    //     $("#name").append(name_val);
    //   });