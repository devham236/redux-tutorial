import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import Favorites from "./Pages/Favorites"
import Recipes from "./Pages/Recipes"
import Modal from "./Components/Modal"
import Checkout from "./Pages/Checkout"

const App = () => {
  const modal = useSelector((state) => state.modal.value)

  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex" }}>
          <Link to={"/"} style={{ marginRight: "1rem" }}>
            <h1>Recipes</h1>
          </Link>
          <Link to={"/favorites"} style={{ marginRight: "1rem" }}>
            <h1>Favorites</h1>
          </Link>
          <Link to={"/checkout"} style={{ marginRight: "1rem" }}>
            <h1>Checkout</h1>
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="difficulty">only show easy recipes</label>
            <input type="checkbox" name="difficulty" id="difficulty" />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Recipes />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
      {modal && <Modal recipe={modal} />}
    </>
  )
}

export default App
