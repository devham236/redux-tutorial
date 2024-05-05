import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  try {
    const res = await fetch("/data.json")
    const data = await res.json()
    return data.recipes
  } catch (error) {
    return error
  }
})

export default fetchRecipes
