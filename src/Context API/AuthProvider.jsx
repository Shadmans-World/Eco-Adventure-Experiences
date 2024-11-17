import React, { createContext, useContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth } from "firebase/auth";

const AuthContext = createContext(null)
export const auth = getAuth(app)

const AuthProvider = ({children}) => {

 

    // Provider Object
    const authInfo = {

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;