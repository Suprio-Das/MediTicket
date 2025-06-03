import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign in with email and password
    const handleLoginWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Handle Sign out
    const handleSignOut = () => {
        return signOut(auth);
    }

    // Set an Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        handleLoginWithEmailAndPass,
        handleSignOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;