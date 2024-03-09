import React from "react"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button>Add User</button>
      </div>
      <div className="displayUsers"></div>
    </div>
  )
}

export default App
