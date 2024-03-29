import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "./Components/RecipeDiv"

const App = () => {
  const recipes = useSelector((state) => state.recipes.value)
  console.log(recipes)
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.slice(0, 5).map((recipe) => (
        <RecipeDiv key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default App
