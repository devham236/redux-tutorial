import React from "react"
import Login from "./Components/Login"
import Profile from "./Components/Profile"

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <Profile />
      <Login />
    </div>
  )
}

export default App
