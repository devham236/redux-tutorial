import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login, logout } from "../features/user"
import { toggle } from "../features/darkMode"

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "Hamza", age: 25, email: "hamza@email.com" }))
        }
        className=" bg-slate-400"
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())} className=" bg-slate-400">
        Logout
      </button>
      <button onClick={() => dispatch(toggle())}>Toggle Darkmode</button>
    </div>
  )
}

export default Login
