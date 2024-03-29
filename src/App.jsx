import React from "react"
import { useSelector } from "react-redux"

const App = () => {
  const recipes = useSelector((state) => state.recipes.value)
  console.log(recipes)
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.slice(0, 5).map((recipe) => (
        <div key={recipe.id} className="">
          <p>{recipe.name}</p>
        </div>
      ))}
    </div>
  )
}

export default App
