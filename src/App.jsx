import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Recipes from "./Pages/Recipes"
import Checkout from "./Pages/Checkout"

const App = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Link to={"/"}>
          <h1 style={{ marginRight: "1rem" }}>Recipes</h1>
        </Link>
        <Link to={"/checkout"}>
          <h1>Checkout</h1>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Recipes />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  )
}

export default App
