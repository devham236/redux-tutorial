import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"
import { alterArray } from "../Slices/recipesSlice"
import fetchRecipes from "../Utils/fetchRecipes"

const Recipes = () => {
  const dispatch = useDispatch()
  const { data, loading, error, showMore, showOnlyEasy } = useSelector(
    (state) => state.recipes
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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="showEasyRecipes">Only show Easy recipes</label>
            <input
              onClick={() => dispatch(alterArray("showOnlyEasy"))}
              type="checkbox"
              name="showEasyRecipes"
              id="showEasyRecipes"
            />
          </div>
          <div>
            {alteredArray.map((recipe) => (
              <RecipeDiv key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <button onClick={() => dispatch(alterArray("showMore"))}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </>
      )}
    </div>
  )
}

export default Recipes
