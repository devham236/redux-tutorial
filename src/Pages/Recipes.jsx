import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeRecipes } from "../Slices/recipesSlice"

import fetchRecipes from "../Utils/fetchRecipes"
import RecipeDiv from "../Components/RecipeDiv"

const Recipes = () => {
  const { data, loading, error, showOnlyEasy, showMore } = useSelector(
    (state) => state.recipes
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  const changedData = showOnlyEasy
    ? data
        .filter((recipe) => recipe.difficulty === "Easy")
        .slice(0, showMore ? 7 : 5)
    : data.slice(0, showMore ? 7 : 5)

  return (
    <div>
      {error != "" ? (
        <p>Error: {error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="onlyEasy">Show only Easy Recipes</label>
            <input
              type="checkbox"
              name="onlyEasy"
              id="onlyEasy"
              onClick={() => dispatch(changeRecipes("showOnlyEasy"))}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {changedData.map((recipe) => (
              <RecipeDiv key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <button onClick={() => dispatch(changeRecipes("showMore"))}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </>
      )}
    </div>
  )
}

export default Recipes
