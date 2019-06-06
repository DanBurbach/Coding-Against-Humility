const FirebaseContext = React.createContext(null);

<<<<<<< HEAD
export const withFirebase = Component => props => ( <
        FirebaseContext.Consumer > {
=======
export const withFirebase = Component => props => ( 
    <FirebaseContext.Consumer> {
>>>>>>> feature/refactor-attempt-react-redux-firebase
            firebase => < Component {
                ...props
            }
            firebase = {
                firebase
<<<<<<< HEAD
            }
            />} </FirebaseContext.Consumer >
        );

=======
            }/>} </FirebaseContext.Consumer>
        );

        export default FirebaseContext;
>>>>>>> feature/refactor-attempt-react-redux-firebase
