import React from 'react';

import { withFirebase } from "../../Firebase/context.js";

const SignOutButton = ({firebase}) => ( 
    <button type = "button" onClick = {firebase.userSignOut}>
        Sign Out 
    </button>
);

export default withFirebase(SignOutButton);