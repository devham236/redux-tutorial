import { createSlice } from "@reduxjs/toolkit"
import getRecipes from "../Utils/getRecipes"

const recipesData = await getRecipes()

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    value: {
      data: recipesData.recipes,
      showOnlyEasy: false,
      showMore: false,
    },
  },
  reducers: {
    toggleValues: (state, action) => {
      state.value[action.payload] = !state.value[action.payload]
    },
  },
})

export const { toggleValues } = recipesSlice.actions
export default recipesSlice.reducer
