import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Recipes from "./Components/Recipes"
import Checkout from "./Components/Checkout"

const App = () => {
  return (
    <div>
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
