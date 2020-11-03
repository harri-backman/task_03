import React, { useState, createContext } from "react"


export const UserContext = createContext()

export const UserProvider = (props) => {

    const [isSignedin, setisSignedin] = useState()

    return (
        <UserContext.Provider value = {[isSignedin, setisSignedin]}>
            {props.children}
        </UserContext.Provider>
    )
}
