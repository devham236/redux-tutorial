import { createSlice } from "@reduxjs/toolkit"
import fetchRecipes from "../Utils/fetchRecipes"

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    value: {
      data: [],
      loading: false,
      error: "",
      showOnlyEasy: false,
      showMore: false,
    },
  },
  reducers: {
    toggleValues: (state, action) => {
      state.value[action.payload] = !state.value[action.payload]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.value.loading = true
      console.log("pending")
    })
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.value.data = action.payload
      state.value.loading = false
      state.value.error = ""
    })
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.value.loading = false
      state.value.error = action.error.message
    })
  },
})

export const { toggleValues } = recipesSlice.actions
export default recipesSlice.reducer
