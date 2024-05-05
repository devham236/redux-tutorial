import React from "react"
import { showModal } from "../Slices/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { addToCheckout, removeFromCheckout } from "../Slices/checkoutSlice"

const RecipeDiv = ({ recipe }) => {
  const dispatch = useDispatch()
  const checkout = useSelector((state) => state.checkout.value)

  const isInCheckout = checkout.includes(recipe)

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "2rem",
        border: "1px solid grey",
      }}
      key={recipe.id}
    >
      <div style={{ width: "100px", height: "100px" }}>
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
        {isInCheckout ? (
          <button onClick={() => dispatch(removeFromCheckout(recipe))}>
            Remove from Checkout
          </button>
        ) : (
          <button onClick={() => dispatch(addToCheckout(recipe))}>
            Add to Checkout
          </button>
        )}
        <button onClick={() => dispatch(showModal(recipe))}>Details</button>
      </div>
    </div>
  )
}

export default RecipeDiv
