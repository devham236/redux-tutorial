import React from "react"
import { useDispatch } from "react-redux"
import { showModal } from "../Slices/modalSlice"

const RecipeDiv = ({ recipe }) => {
  const dispatch = useDispatch()
  return (
    <div
      key={recipe.id}
      style={{
        border: "1px solid grey",
        marginBottom: "1rem",
        display: "flex",
      }}
    >
      <div style={{ width: "100px", height: "100px" }}>
        <img src={recipe.image} style={{ width: "100%", height: "100%" }} />
      </div>
      <div>
        <p>{recipe.name}</p>
        <p>{recipe.difficulty}</p>
        <p>{recipe.rating}</p>
      </div>
      <div>
        <button onClick={() => dispatch(showModal(recipe))}>Details</button>
        <button>Add to checkout</button>
      </div>
    </div>
  )
}

export default RecipeDiv
