import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfile_name_url = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo,
        })
    }
    const logIn_with_google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logIn_with_gitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        // unmounting to stop observing more.
        return () => {
            return unsubscribe;
        }
    }, [])
    const authInfo = {
        user,
        loading,
        register,
        updateProfile_name_url,
        logIn_with_google,
        logIn_with_gitHub,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;