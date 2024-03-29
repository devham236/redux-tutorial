import { createSlice } from "@reduxjs/toolkit"
import getRecipes from "../Utils/getRecipes"

const recipes = await getRecipes()

const recipeSlice = createSlice({
  name: "recipes",
  initialState: { value: recipes },
  reducers: {},
})

export default recipeSlice.reducer
