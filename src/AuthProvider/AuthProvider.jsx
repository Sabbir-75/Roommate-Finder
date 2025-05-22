import React, { createContext, use, useEffect, useState } from 'react';
import { auth } from '../Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
export const AuthContext = createContext()
const resallData = fetch("http://localhost:5000/roommates").then(res => res.json())
const resSortData = fetch("http://localhost:5000/roommates/latest").then(res => res.json())

const AuthProvider = ({ children }) => {

    const useAllData = use(resallData)
    const useSortData = use(resSortData)
    const [allData, setAllData] = useState(useAllData)
    const [sortData, setsortData] = useState(useSortData)
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

    const logout = () => {
        setLoading(true)
        return signOut(auth)
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
        ProfileUpdate,
        logout,
        sortData,
        setsortData,
        allData
    }
    return (
        <AuthContext value={authValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;