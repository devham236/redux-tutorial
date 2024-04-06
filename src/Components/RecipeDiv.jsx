import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { showModal } from "../Slices/modalSlice"
import { addToCheckout, removeFromCheckout } from "../Slices/checkoutSlice"

const RecipeDiv = ({ recipe }) => {
  const checkout = useSelector((state) => state.checkout.value)
  const dispatch = useDispatch()

  const isInCheckout = checkout.includes(recipe)

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "2rem",
        border: "1px solid lightgrey",
      }}
    >
      <div style={{ width: "100px", height: "100px" }}>
        <img src={recipe.image} style={{ width: "100%", height: "100%" }} />
      </div>
      <div>
        <p style={{ margin: "0" }}>{recipe.name}</p>
        <p style={{ margin: "0" }}>{recipe.difficulty}</p>
        <p style={{ margin: "0" }}>{recipe.prepTimeMinutes}min</p>
      </div>
      <div>
        <button onClick={() => dispatch(showModal({ recipe }))}>Details</button>
        {isInCheckout ? (
          <button onClick={() => dispatch(removeFromCheckout(recipe))}>
            Remove from Checkout
          </button>
        ) : (
          <button onClick={() => dispatch(addToCheckout(recipe))}>
            Add to Checkout
          </button>
        )}
      </div>
    </div>
  )
}

export default RecipeDiv
