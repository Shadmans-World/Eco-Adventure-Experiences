import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
export const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then(result => result.json())
        .then(data => {
            setItems(data);
            const imageUrls = data.map(item => item.image);  // Create an array of image URLs
            setImages(imageUrls);
        })
        .catch(err => console.error("Failed to fetch data:", err));
    }, []);

    const createUser = (email, password) => {
        setLoading(true);  // Ensure loading state is set to true before API calls
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) => {
        setLoading(true);  // Set loading before login attempt
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);  // Set loading before logging out
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);  // Set loading to false after authentication state is fetched
        });

        return () => {
            unSubscribe(); // Cleanup subscription on unmount
        };
    }, []);

    const authInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        logOut,
        error,
        setError,
        items,
        setItems,
        images,
        setImages,
        loading,  // Provide loading state
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
