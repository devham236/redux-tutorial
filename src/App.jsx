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
        <div
          key={recipe.id}
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
            <button>Details</button>
            <button>Set as Favourite</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
