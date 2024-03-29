import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "./Components/RecipeDiv"

const App = () => {
  const recipes = useSelector((state) => state.recipes.value)
  const favorites = useSelector((state) => state.favorites.value)
  console.log(recipes)
  console.log(favorites)
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1 style={{ marginRight: "1rem" }}>Recipes</h1>
        <h1>Favorites</h1>
      </div>
      {recipes.slice(0, 5).map((recipe) => (
        <RecipeDiv key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default App
