import React from "react"
import { hideModal } from "../Slices/modalSlice"
import { useDispatch } from "react-redux"

const Modal = ({ modal }) => {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "lightblue",
        padding: "2rem",
      }}
    >
      <h1>{modal.name}</h1>
      <ul>
        {modal.ingredients.map((ingre, index) => (
          <li key={index}>{ingre}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(hideModal())}>Close Modal</button>
    </div>
  )
}

export default Modal
