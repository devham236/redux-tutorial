import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const res = await fetch("/data.json")
  const { recipes } = await res.json()
  return recipes
})

export default fetchRecipes
