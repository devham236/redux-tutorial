import React from "react"
import RecipeDiv from "../Components/RecipeDiv"
import { useDispatch, useSelector } from "react-redux"
import { toggleRecipes } from "../Slices/recipeSlice"

const Recipes = () => {
  const dispatch = useDispatch()
  const recipes = useSelector((state) => state.recipes.value)

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeDiv key={recipe.id} recipe={recipe} />
      ))}
      <button
        onClick={() => dispatch(toggleRecipes(recipes.length < 7 ? 7 : 5))}
      >
        Show {recipes.length < 7 ? "more" : "less"} Recipes
      </button>
    </div>
  )
}

export default Recipes
