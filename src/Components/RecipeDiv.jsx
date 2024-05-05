import React from "react"

const RecipeDiv = ({ recipe }) => {
  return (
    <div
      key={recipe.id}
      style={{
        border: "1px solid lightgrey",
        marginBottom: "1rem",
        display: "flex",
      }}
    >
      <img
        src={recipe.image}
        alt=""
        style={{ width: "100px", height: "100px" }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{recipe.name}</p>
        <p>{recipe.rating}</p>
        <p>{recipe.difficulty}</p>
      </div>

      <div>
        <button>Add To Checkout</button>
        <button>Details</button>
      </div>
    </div>
  )
}

export default RecipeDiv
