import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { switchState } from "../Slices/toggleSlice"

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.value)
  const toggle = useSelector((state) => state.toggle.value)
  const dispatch = useDispatch()

  const slicedRecipes = recipes.slice(0, toggle ? 7 : 5)

  return (
    <div>
      {slicedRecipes.map((recipe) => (
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
      <button onClick={() => dispatch(switchState())}>
        Show {toggle ? "Less" : "More"}
      </button>
    </div>
  )
}

export default Recipes
