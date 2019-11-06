import React, { useEffect, useState } from "react";
import app from "./firebaseConfig";


//In React, context is a tool that allows you to propagate data through the whole component file structure
export const AuthContext = React.createContext();

//This will store info for the state of the current user's authorization state
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    //This will monitor if someone is logged in or not and proceed to run every time it's state changes
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        //Exporting the state of current status to other components to be evaluated
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};