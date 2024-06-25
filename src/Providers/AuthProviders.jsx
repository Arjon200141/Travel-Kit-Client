import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setloading] = useState(true);

    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo, 
        })
    }

    const logOut = () => {
        setloading(true);
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current user', currentUser);
            setloading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;