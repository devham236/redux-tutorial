import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.value)
  console.log(recipes)
  return (
    <div>
      <div>
        {recipes.data.map((recipe) => (
          <RecipeDiv key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Recipes
