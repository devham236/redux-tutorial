import { createSlice } from "@reduxjs/toolkit"
import getRecipes from "../Utils/getRecipes"

const recipes = await getRecipes()

const recipeSlice = createSlice({
  name: "recipes",
  initialState: { value: recipes.slice(0, 5) },
  reducers: {
    toggleRecipes: (state, action) => {
      state.value = recipes.slice(0, action.payload)
    },
  },
})

export const { toggleRecipes } = recipeSlice.actions
export default recipeSlice.reducer
