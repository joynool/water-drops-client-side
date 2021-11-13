import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

/*-----------------------------------------------------
Implement Context API to pass data through Router DOM
-------------------------------------------------------*/
const AuthProvider = ({ children }) =>
{
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;