import React from "react"
import { hideModal } from "../Slices/modalSlice"
import { useDispatch } from "react-redux"

const Modal = ({ recipe }) => {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        border: "1px solid lightgrey",
        marginTop: "2rem",
      }}
    >
      <h1>{recipe.name}</h1>
      <ul>
        {recipe.ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(hideModal())}>Close Modal</button>
    </div>
  )
}

export default Modal
