import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const authInfo ={

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;