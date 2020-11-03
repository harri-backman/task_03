import React from "react"
import { Routing } from "./routes/routing"
import { NavigationBar } from "./components/navigationbar/navigationBar"
import { UserProvider } from "./shared/global/provider/UserProvider"
import { HeaderLine } from "./components/headerline/headerLine"

function App() {

  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
        <HeaderLine />
      </Routing>
    </UserProvider>
  )
}

export default App
