import React, { useState } from 'react';
import { fbLogin, fbRegister } from '../services/firebaseService';

interface IAuthContext {
    isUserSignedIn: boolean;
    register: (firstname: string, lastname: string, username: string, password: string) => void;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = React.createContext<IAuthContext | undefined>(undefined);

export const AuthContextProvider: React.FC = (props) => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const login = async (username: string, password: string) => {
        const userCred = await fbLogin(username, password);
        if (userCred) {
            if (userCred.user) {
                setIsUserSignedIn(true)
            }
        } else {
            alert("Wrong username/password");
        }
    };
    const register = async (
        firstname: string,
        lastname: string,
        username: string,
        password: string
    ) => {
        await fbRegister(firstname, lastname, username, password);
    };
    const logout = () => { setIsUserSignedIn(false) };

    return (
        <AuthContext.Provider value={{ isUserSignedIn, register, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}