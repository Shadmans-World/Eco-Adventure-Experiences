import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [passErrors, setPassErrors] = useState({});
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);

  // Fetching items and images (if needed)
  useEffect(() => {
    fetch('/data.json')
      .then((result) => result.json())
      .then((data) => {
        setItems(data);
        const imageUrls = data.map((item) => item.image);
        setImages(imageUrls);
      })
      .catch((err) => console.error('Failed to fetch data:', err));
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google Sign-In
  const googleSignInUser = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true); // Start loading state

    return signInWithPopup(auth, provider)
      .then((result) => {
        if (!result || !result.user) {
          throw new Error("Google Sign-In failed. No user data found.");
        }
        
        const user = result.user;
        
        // Handle photoURL if it's missing
        if (!user.photoURL) {
          user.photoURL = user.providerData[0]?.photoURL || '';
        }
        
        setUser(user); // Set user in context
        console.log('Google Sign-In Successful', user);
        setError(''); // Clear any previous errors

        // You can navigate here if necessary after sign-in
      })
      .catch((err) => {
        console.log('Google Sign-In Error:', err.message);
        setError(err.message); // Set error message
        setLoading(false); // Stop loading state after error
      });
  };

  // Auth state change listener (user state persistence)
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
      setLoading(false); // Stop loading
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // AuthContext value to be provided to the components
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
    loading,
    passErrors,
    setPassErrors,
    googleSignInUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
