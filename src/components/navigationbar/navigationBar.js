import React, { useContext } from "react"
import "./navigationBar.css"
import { useHistory } from "react-router-dom"
import routingPath from "../../routes/routingPath"

import { UserContext } from "../../shared/global/provider/UserProvider"

export const NavigationBar = () => {
    
    const history = useHistory()

    const [isSignedin, setisSignedin] = useContext(UserContext)

    function RemoveSignedin() {

        if (isSignedin) {
            alert("Bye " + isSignedin)
            setisSignedin()
        }

        /* Using useContext instead */
        /* localStorage.removeItem("signedin") */

        history.push(routingPath.homeView)
    }
    
    return (
        <div className = "navigationBarContainer">
            <p className = "navigationBarTitle">Folk Music</p>

            <span className = "navigationBarHome" onClick={() => 
                history.push(routingPath.homeView)}>Home Page</span>

            <span className = "navigationBarBrowse" onClick={() => 
                history.push(routingPath.browserView)}>Browse</span>

            <span className = "navigationBarAppend" onClick={() => 
                history.push(routingPath.appendView)}>Append</span>
                
            <span className = "navigationBarSignin" onClick={() => 
                history.push(routingPath.signinView)}>Sign in</span>

            <span className = "navigationBarLogout" onClick={                 
                RemoveSignedin}>Log out</span>

        </div>
    )
}
