import React from "react"
import { useSelector } from "react-redux"

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.value)
  console.log(recipes)
  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid grey",
            marginBottom: "2rem",
            display: "flex",
          }}
        >
          <div style={{ width: "100px", height: "100px" }}>
            <img src={recipe.image} style={{ width: "100%", height: "100%" }} />
          </div>
          <div>
            <p>{recipe.name}</p>
            <p>{recipe.difficulty}</p>
            <p>{recipe.rating}</p>
          </div>
          <div>
            <button>Details</button>
            <button>Add to checkout</button>
          </div>
        </div>
      ))}
      <button>Show More</button>
    </div>
  )
}

export default Recipes
