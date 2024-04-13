import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { switchState } from "../Slices/toggleSlice"
import RecipeDiv from "../Components/RecipeDiv"

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.value)
  const toggle = useSelector((state) => state.toggle.value)
  const dispatch = useDispatch()

  const alteredArray = toggle.onlyEasy
    ? recipes
        .filter((recipe) => recipe.difficulty === "Easy")
        .slice(0, toggle.showMoreOrLess ? 7 : 5)
    : recipes.slice(0, toggle.showMoreOrLess ? 7 : 5)

  return (
    <div>
      <div>
        <label htmlFor="easy">show only easy recipes</label>
        <input
          type="checkbox"
          id="easy"
          onClick={() => dispatch(switchState("onlyEasy"))}
        />
      </div>
      {alteredArray.map((recipe) => (
        <RecipeDiv key={recipe.id} recipe={recipe} />
      ))}
      <button onClick={() => dispatch(switchState("showMoreOrLess"))}>
        Show {toggle.showMoreOrLess ? "Less" : "More"}
      </button>
    </div>
  )
}

export default Recipes
