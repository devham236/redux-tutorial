import React from "react"
import { addItem, removeItem } from "../Slices/checkoutSlice"
import { useDispatch, useSelector } from "react-redux"
import { openModal } from "../Slices/modalSlice"

const RecipeDiv = ({ recipe }) => {
  const { data } = useSelector((state) => state.checkout)
  const dispatch = useDispatch()

  const isInCheckout = data.includes(recipe)

  return (
    <div
      key={recipe.id}
      style={{
        border: "1px solid lightgrey",
        marginBottom: "1rem",
        display: "flex",
      }}
    >
      <img
        src={recipe.image}
        alt=""
        style={{ width: "100px", height: "100px" }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{recipe.name}</p>
        <p>{recipe.rating}</p>
        <p>{recipe.difficulty}</p>
        <p>{recipe.cookTimeMinutes}min</p>
      </div>

      <div>
        {isInCheckout ? (
          <button onClick={() => dispatch(removeItem(recipe))}>
            Remove from Checkout
          </button>
        ) : (
          <button onClick={() => dispatch(addItem(recipe))}>
            Add To Checkout
          </button>
        )}
        <button onClick={() => dispatch(openModal(recipe))}>Details</button>
      </div>
    </div>
  )
}

export default RecipeDiv
