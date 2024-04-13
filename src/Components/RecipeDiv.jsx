import React from "react"

const RecipeDiv = ({ recipe }) => {
  return (
    <div
      key={recipe.id}
      style={{
        border: "1px solid grey",
        marginBottom: "1rem",
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
  )
}

export default RecipeDiv
