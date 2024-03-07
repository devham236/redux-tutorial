import React from "react"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import ChangeColor from "./Components/ChangeColor"

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  )
}

export default App
