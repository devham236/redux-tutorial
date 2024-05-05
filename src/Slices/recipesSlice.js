import { createSlice } from "@reduxjs/toolkit"
import fetchRecipes from "../Utils/fetchRecipes"

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    data: [],
    loading: false,
    error: "",
    showOnlyEasy: false,
    showMore: false,
  },
  reducers: {
    changeRecipes: (state, action) => {
      state[action.payload] = !state[action.payload]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ""
    })
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const { changeRecipes } = recipesSlice.actions
export default recipesSlice.reducer
