import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchRecipes } from "../Slices/recipesSlice"

const Recipes = () => {
  const { data, loading, error } = useSelector((state) => state.recipes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  return <div></div>
}

export default Recipes
