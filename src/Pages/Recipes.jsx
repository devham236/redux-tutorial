import React from "react"
import RecipeDiv from "../Components/RecipeDiv"
import { useSelector } from "react-redux"

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.value)
  return (
    <div>
      {recipes.slice(0, 5).map((recipe) => (
        <RecipeDiv key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default Recipes
