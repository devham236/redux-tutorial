import React, { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { addUser, deleteUser, updateUser } from "./Features/users"

const App = () => {
  const usersList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()
  const [updatedUsername, setUpdatedUsername] = useState("")
  const [newUser, setNewUser] = useState({
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
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: usersList[usersList.length - 1].id + 1,
                ...newUser,
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {usersList.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type="text"
              placeholder="New Username..."
              onChange={(e) => setUpdatedUsername(e.target.value)}
            />
            <button
              onClick={() =>
                dispatch(updateUser({ id: user.id, value: updatedUsername }))
              }
            >
              Update Username
            </button>
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
