/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    token: JSON.parse(localStorage.getItem('token_voter')) || null
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('token_voter', JSON.stringify(state.token));
    }, [state.token])

    return (
        <AuthContext.Provider value={{ token: state.token, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}