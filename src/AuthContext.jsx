import React, { createContext, useContext, useEffect, useState } from 'react';
import { account } from './config/appwrite'; 
import { ID } from 'appwrite';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the user is logged in
        account.get().then((response) => {
            setCurrentUser(response);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        });
    }, []);

    const signup = async (email, password) => {
        try {
            const response = await account.create( ID.unique() ,email, password);
            setCurrentUser(response);
        } catch (error) {
            alert(error)
        }
    };

    const login = async (email, password) => {
        try {
            const response = await account.createEmailSession(email, password);
            setCurrentUser(response);
        } catch (error) {
            alert(error)
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession('current');
            setCurrentUser(null);
        } catch (error) {
            // Handle error
        }
    };

    const value = {
        currentUser,
        loading,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
