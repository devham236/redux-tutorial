import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { value: [] },
  reducers: {
    addRecipe: (state, action) => {
      state.value.push(action.payload)
    },
    removeRecipe: (state, action) => {
      const filteredArray = state.value.filter(
        (recipe) => recipe.id != action.payload.id
      )
      state.value = filteredArray
    },
  },
})

export const { addRecipe, removeRecipe } = favoritesSlice.actions

export default favoritesSlice.reducer
