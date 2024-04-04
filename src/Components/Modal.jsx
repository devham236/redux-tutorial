import React from "react"
import { hideModal } from "../Slices/modalSlice"
import { useDispatch } from "react-redux"
import { addToCheckout } from "../Slices/checkoutSlice"

const Modal = ({ recipe }) => {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>{recipe.name}</h1>
      <ul>
        {recipe.ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(hideModal())}>Close Modal</button>
      <button onClick={() => dispatch(addToCheckout())}>Add to Checkout</button>
    </div>
  )
}

export default Modal
