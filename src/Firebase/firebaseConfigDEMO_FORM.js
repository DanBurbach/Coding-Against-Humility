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
