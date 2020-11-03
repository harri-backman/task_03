import React, { useState, useContext } from "react"
import "./signinView.css"
import { useHistory } from "react-router-dom"
import routingPath from "../../routes/routingPath"

import { UserContext } from "../../shared/global/provider/UserProvider"

export const SigninView = () => {

    const history = useHistory()
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()

    const [isSignedin, setisSignedin] = useContext(UserContext)

    function PopulateSignedin() {
        if (loginEmail == null || loginEmail === "") {
            alert("Missing Email")
        } else {
            if (loginPassword == null || loginPassword === "") {
                alert("Missing Password")
            } else {
                alert("Welcome " + loginEmail)
                setisSignedin(loginEmail)

                /* Using useContext instead */
                /* localStorage.setItem("signedin", loginEmail) */

                history.push(routingPath.homeView)
            }
        }        
    }

    return (
        <div className = "signinContainer">
            <h1 className = "signinTitle">Please, sign in</h1>

            <p className = "signinInputLabel">Email:</p>
            
            <input className = "signinInput" onChange={
                (e) => setLoginEmail(e.target.value)}></input>

            <p className = "signinPasswordLabel">Password:</p>
            
            <input className = "signinPassword" type = "password" onChange={
                (e) => setLoginPassword(e.target.value)}></input>

            <button className = "signinButton" onClick={
                PopulateSignedin}>Sign in</button>
        </div>
    )
}
