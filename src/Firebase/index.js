import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCKLHnqaz10xqkGnLj0uLvo9p_9WPaLbgI",
    authDomain: "codingagainsthumilityapi.firebaseapp.com",
    databaseURL: "https://codingagainsthumilityapi.firebaseio.com",
    projectId: "codingagainsthumilityapi",
    storageBucket: "codingagainsthumilityapi.appspot.com",
    messagingSenderId: "568078378035",
    appId: "1:568078378035:web:0cf1dd4583639518"
};

firebase.initializeApp(config);

export default firebase;
