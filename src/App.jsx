import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Recipes from "./Pages/Recipes"
import Checkout from "./Pages/Checkout"

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex" }}>
        <Link to={"/"} style={{ marginRight: "2rem" }}>
          <h1>Recipes</h1>
        </Link>
        <Link to={"/checkout"}>
          <h1>Checkout</h1>
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
