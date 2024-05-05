import React from "react"
import { useDispatch } from "react-redux"
import { closeModal } from "../Slices/modalSlice"

const Modal = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "lightblue",
        padding: "1rem",
      }}
    >
      <h1>{data.name}</h1>
      <ul>
        {data.ingredients.map((ingre, index) => (
          <li key={index}>{ingre}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(closeModal())}>Close</button>
    </div>
  )
}

export default Modal
