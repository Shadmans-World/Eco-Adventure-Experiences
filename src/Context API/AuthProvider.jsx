import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
export const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // Create USer
    const createUser = (email, password) => {
        setLoading(true)
        
       return createUserWithEmailAndPassword(auth,email, password)
    }

    // Login USer
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Log Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            // console.log(loading)
            console.log('User is:',currentUser)
            
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    // console.log(loading)

    // Provider Object
    const authInfo = {
        user, setUser,
        createUser,
        logInUser,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;