import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { switchState } from "../Slices/toggleSlice"
import RecipeDiv from "../Components/RecipeDiv"

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.value)
  const toggle = useSelector((state) => state.toggle.value)
  const dispatch = useDispatch()

  const slicedRecipes = recipes.slice(0, toggle.showMoreOrLess ? 7 : 5)

  return (
    <div>
      {slicedRecipes.map((recipe) => (
        <RecipeDiv key={recipe.id} recipe={recipe} />
      ))}
      <button onClick={() => dispatch(switchState("showMoreOrLess"))}>
        Show {toggle.showMoreOrLess ? "Less" : "More"}
      </button>
    </div>
  )
}

export default Recipes
