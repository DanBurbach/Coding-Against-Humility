import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const config = {
    apiKey: 'AIzaSyCKLHnqaz10xqkGnLj0uLvo9p_9WPaLbgI',
    authDomain: 'codingagainsthumilityapi.firebaseapp.com',
    databaseURL: 'https: //codingagainsthumilityapi.firebaseio.com',
    projectId: 'codingagainsthumilityapi',
    storageBucket: 'codingagainsthumilityapi.appspot.com',
    messagingSenderId: '568078378035',
    appId: '1: 568078378035: web: 0 cf1dd4583639518',
};


class Firebase {
    constructor() {
        app.initializeApp(config);
        // this.serverValue = app.database.ServerValue;
        // this.emailAuthProvider = app.auth.EmailAuthProvider;

        this.auth = app.auth();
        this.db = app.database();
    }

    createUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    signInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    userSignOut = () => this.auth.signOut();

    userPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    userPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    doSendEmailVerification = () =>
        this.auth.currentUser.sendEmailVerification({
            url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
        });

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                        };
                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
    getRefs = ref => this.db.ref(ref);
    updateUser = () => {
        return this.users.updateUser();
    };
}

export default Firebase;
