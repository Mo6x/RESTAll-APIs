import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";



export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async(Input) => {
        const res = await axios.post("/auth/login", Input);
        setCurrentUser(res.data);
    };

    const logout = async(Input) => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    return(
        <AuthContext.Provider value={{ currentUser, login, logout }}>
           {children}
        </AuthContext.Provider>
    );

};

