import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Recipes from "./Pages/Recipes"
import Checkout from "./Pages/Checkout"
import Modal from "./Components/Modal"
import { useSelector } from "react-redux"

const App = () => {
  const modal = useSelector((state) => state.modal.value)
  return (
    <div style={{ position: "relative" }}>
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
      {modal && <Modal modal={modal} />}
    </div>
  )
}
export default App
