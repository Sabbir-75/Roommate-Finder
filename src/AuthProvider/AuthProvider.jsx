import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    const createAccout = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();

    const googleAccount = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     
    const ProfileUpdate = (profile) => {
           setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUserData(currentuser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authValue = {
        createAccout,
        userData,
        setUserData,
        googleAccount,
        signin,
        ProfileUpdate
    }
    return (
        <AuthContext value={authValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;