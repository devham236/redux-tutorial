import React from "react"
import { showModal } from "../Slices/modalSlice"
import { useDispatch } from "react-redux"

const RecipeDiv = ({ recipe }) => {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "2rem",
        border: "1px solid grey",
      }}
      key={recipe.id}
    >
      <div style={{ width: "200px", height: "200px" }}>
        <img
          src={recipe.image}
          alt=""
          style={{ widths: "100%", height: "100%" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{recipe.name}</p>
        <p>{recipe.rating}</p>
        <p>{recipe.difficulty}</p>
      </div>
      <div>
        <button>Add to Checkout</button>
        <button onClick={() => dispatch(showModal(recipe))}>Details</button>
      </div>
    </div>
  )
}

export default RecipeDiv
