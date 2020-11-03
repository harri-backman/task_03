import React, { Suspense, useContext, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeView } from "../view/homeview/homeView"
import { BrowserView } from "../view/browserview/browserView"
import { AppendView } from "../view/appendview/appendView"
import { SigninView } from "../view/signinview/signinView"
import { UserContext } from "../shared/global/provider/UserProvider"
import routingPath from "./routingPath"


export const Routing = (props) => {

    const [isSignedin, setisSignedin] = useContext(UserContext)

    const blockRoutingIfSignedin = (toView) => {
        return isSignedin ? HomeView : toView
    }

    const blockRoutingIfNotSignedin = (toView) => {
        return !isSignedin ? SigninView : toView
    }

    /* Using useContext instead */
    /*
    const checkIfSignedin = () => {
        setisSignedin(localStorage.getItem("signedin"))
    }

    useEffect(() => {
        checkIfSignedin()
    })
    */

    return (
        <Router>
            <Suspense fallback = {<h1>The page is loading, please wait ...</h1>}>
                {props.children}
                <Switch>
                    <Route exact path = {routingPath.browserView} component = {blockRoutingIfNotSignedin(BrowserView)} />
                    <Route exact path = {routingPath.appendView} component = {blockRoutingIfNotSignedin(AppendView)} />
                    <Route exact path = {routingPath.signinView} component = {blockRoutingIfSignedin(SigninView)} />
                    <Route component = {HomeView} />
                </Switch>
            </Suspense>
        </Router>
    )
}