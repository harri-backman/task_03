import React, { useContext } from "react"
import "./headerLine.css"
import { UserContext } from "../../shared/global/provider/UserProvider"

export const HeaderLine = () => {

    const [isSignedin, setisSignedin] = useContext(UserContext)

    return (
        <div className = "headerLineContainer">
            <p className = "isSignedin">{ isSignedin }</p>
        </div>
    )
}
