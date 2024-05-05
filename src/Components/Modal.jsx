import React from "react"
import { closeModal } from "../Slices/modalSlice"
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
        padding: "2rem",
        backgroundColor: "lightblue",
      }}
    >
      <p>{modal.name}</p>
      <ul>
        {modal.ingredients.map((ingre, index) => (
          <li key={index}>{ingre}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(closeModal())}>Close</button>
    </div>
  )
}

export default Modal
