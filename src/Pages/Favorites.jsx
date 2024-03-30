import React from "react"
import RecipeDiv from "../Components/RecipeDiv"
import { useSelector } from "react-redux"

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.value)
  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((recipe) => <RecipeDiv key={recipe.id} recipe={recipe} />)
      ) : (
        <p>Your favorites List is empty...</p>
      )}
    </div>
  )
}

export default Favorites
