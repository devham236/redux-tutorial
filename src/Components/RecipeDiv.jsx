import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRecipe, removeRecipe } from "../Slices/favoritesSlice"
import { showModal } from "../Slices/modalSlice"

const RecipeDiv = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites.value)
  const dispatch = useDispatch()

  const isInFavorites = favorites.includes(recipe)

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
        {isInFavorites ? (
          <button onClick={() => dispatch(removeRecipe(recipe))}>
            Remove as Favourite
          </button>
        ) : (
          <button onClick={() => dispatch(addRecipe(recipe))}>
            Set as Favourite
          </button>
        )}
      </div>
    </div>
  )
}

export default RecipeDiv
