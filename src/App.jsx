import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Recipes from "./Pages/Recipes"
import Checkout from "./Pages/Checkout"
import Modal from "./Components/Modal"
import { useSelector } from "react-redux"

const App = () => {
  const { value } = useSelector((state) => state.modal)

  console.log(value)
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex" }}>
        <Link to={"/"} style={{ marginRight: "1rem" }}>
          <h1>Recipes</h1>
        </Link>
        <Link to={"/checkout"}>
          <h1>Checkout</h1>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Recipes />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>

      {value && <Modal data={value} />}
    </div>
  )
}

export default App
