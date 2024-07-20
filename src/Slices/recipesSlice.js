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
    alterArray: (state, action) => {
      state[action.payload] = !state[action.payload]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = ""
    })
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

console.log(recipesSlice)

export const { alterArray } = recipesSlice.actions
export default recipesSlice.reducer
