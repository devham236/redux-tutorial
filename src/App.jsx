import React, { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./Features/users"

const App = () => {
  const usersList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({
    id: 0,
    name: "",
    username: "",
  })

  const changeState = (event) => {
    const { value, name } = event.target

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          name="name"
          onChange={(e) => changeState(e)}
        />
        <input
          type="text"
          placeholder="Username..."
          name="username"
          onChange={(e) => changeState(e)}
        />
        <button onClick={() => dispatch(addUser())}>Add User</button>
      </div>
      <div className="displayUsers">
        {usersList.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
