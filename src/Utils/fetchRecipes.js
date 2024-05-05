import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data.recipes
})

export default fetchRecipes
