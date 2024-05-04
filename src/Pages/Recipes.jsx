import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"
import { toggleValues } from "../Slices/recipesSlice"
import fetchRecipes from "../Utils/fetchRecipes"

const Recipes = () => {
  const dispatch = useDispatch()
  const { data, showMore, showOnlyEasy } = useSelector(
    (state) => state.recipes.value
  )
  const alteredArray = showOnlyEasy
    ? data
        .filter((recipe) => recipe.difficulty === "Easy")
        .slice(0, showMore ? 7 : 5)
    : data.slice(0, showMore ? 7 : 5)

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  return (
    <div>
      <label htmlFor="showEasyRecipes">Only show Easy recipes</label>
      <input
        onClick={() => dispatch(toggleValues("showOnlyEasy"))}
        type="checkbox"
        name="showEasyRecipes"
        id="showEasyRecipes"
      />
      <div>
        {alteredArray.map((recipe) => (
          <RecipeDiv key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <button onClick={() => dispatch(toggleValues("showMore"))}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  )
}

export default Recipes
