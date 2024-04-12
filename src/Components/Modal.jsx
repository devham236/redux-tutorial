import React from "react"
import { closeModal } from "../Slices/modalSlice"
import { useDispatch } from "react-redux"

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
      <button onClick={() => dispatch(closeModal())}>Close Modal</button>
    </div>
  )
}

export default Modal
