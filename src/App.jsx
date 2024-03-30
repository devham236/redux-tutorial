import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Favorites from "./Pages/Favorites"
import Recipes from "./Pages/Recipes"

const App = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Link to={"/"} style={{ marginRight: "1rem" }}>
          <h1>Recipes</h1>
        </Link>
        <Link to={"/favorites"}>
          <h1>Favorites</h1>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Recipes />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  )
}

export default App
