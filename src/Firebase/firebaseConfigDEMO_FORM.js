<<<<<<< HEAD
// All below information needs to be updated to use firebase
// import firebase from 'firebase/app';
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: 'xxxxxx',
//   authDomain: 'xxxxxx.firebaseapp.com',
//   databaseURL: 'https://xxxxxx.firebaseio.com',
//   projectId: 'xxxxxx',
//   storageBucket: '',
//   messagingSenderId: 'xxxxxx',
// };
// firebase.initializeApp(firebaseConfig);

// export default firebase;
=======
import firebase from 'firebase/app';
import 'firebase/database';

// All below information needs to be updated to use firebase
const config = {
  apiKey: 'xxxxxx',
  authDomain: 'xxxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxx.firebaseio.com',
  projectId: 'xxxxxx',
  storageBucket: '',
  messagingSenderId: 'xxxxxx',
};

firebase.initializeApp(config);

export default firebase;
>>>>>>> feature/refactor-attempt-react-redux-firebase
