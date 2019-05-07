import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey:xxxxxxxxxx,
    authDomain: xxxxxxxxxx,
    databaseURL:xxxxxxxxxx,
    projectId: xxxxxxxxxx,
    storageBucket: xxxxxxxxxx,
    messagingSenderId: xxxxxxxxxx,
    appId: xxxxxxxxxx
};

firebase.initializeApp(config);

export default firebase;
