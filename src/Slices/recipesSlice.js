import { createSlice } from "@reduxjs/toolkit"
import fetchRecipes from "../Utils/fetchRecipes"

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    data: [],
    loading: false,
    error: "",
    showOnlyEasy: false,
    showMoreOrLess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ""
      console.log(action)
    })
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
      console.log(action)
    })
  },
})

export default recipesSlice.reducer
