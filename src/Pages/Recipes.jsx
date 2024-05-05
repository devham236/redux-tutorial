import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchRecipes from "../Utils/fetchRecipes"
import RecipeDiv from "../Components/RecipeDiv"

const Recipes = () => {
  const { data, loading, error } = useSelector((state) => state.recipes)
  const dispatch = useDispatch()
  console.log(useSelector((state) => state.recipes))

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="onlyEasy">Show only Easy Recipes</label>
        <input type="checkbox" name="onlyEasy" id="onlyEasy" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((recipe) => (
          <RecipeDiv key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <button>Show More</button>
    </div>
  )
}

export default Recipes
