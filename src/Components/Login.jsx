import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/user"

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
    </div>
  )
}

export default Login
