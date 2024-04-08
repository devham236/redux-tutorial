import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Recipes from "./Pages/Recipes"
import Modal from "./Components/Modal"
import Checkout from "./Pages/Checkout"
import { useSelector } from "react-redux"

const App = () => {
  const modal = useSelector((state) => state.modal.value)

  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex" }}>
          <Link to={"/"} style={{ marginRight: "1rem" }}>
            <h1>Recipes</h1>
          </Link>
          <Link to={"/checkout"} style={{ marginRight: "1rem" }}>
            <h1>Checkout</h1>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Recipes />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
      {modal && <Modal recipe={modal} />}
    </>
  )
}

export default App
