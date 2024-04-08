import React from "react"
import RecipeDiv from "../Components/RecipeDiv"
import { useDispatch, useSelector } from "react-redux"
import { toggleRecipes } from "../Slices/recipeSlice"
import { toggleState } from "../Slices/onlyEasySlice"

const Recipes = () => {
  const dispatch = useDispatch()
  const recipes = useSelector((state) => state.recipes.value)
  const onlyEasy = useSelector((state) => state.onlyEasy.value)

  const recipesArray = onlyEasy
    ? recipes.filter((recipe) => recipe.difficulty === "Easy")
    : recipes

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}
      >
        <label htmlFor="difficulty">only show easy recipes</label>
        <input
          type="checkbox"
          name="difficulty"
          id="difficulty"
          onClick={() => dispatch(toggleState())}
        />
      </div>
      {recipesArray.map((recipe) => (
        <RecipeDiv key={recipe.id} recipe={recipe} />
      ))}
      <button
        onClick={() => dispatch(toggleRecipes(recipes.length < 7 ? 7 : 5))}
      >
        Show {recipes.length < 7 ? "more" : "less"} Recipes
      </button>
    </div>
  )
}

export default Recipes
