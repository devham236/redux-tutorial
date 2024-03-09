import React from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./Features/users"

const App = () => {
  const usersList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button>Add User</button>
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
