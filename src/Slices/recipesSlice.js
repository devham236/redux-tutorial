import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await fetch("/data.json")
    const { recipes } = await response.json()
    return recipes
  }
)

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    data: [],
    error: "",
    loading: false,
    showMore: false,
    onlyShowEasy: false,
  },
  reducers: {
    alterArray: (state, action) => {
      state[action.payload] = !state[action.payload]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state, action) => {
      state.loading = true
      state.error = ""
    })
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.data = action.payload
      state.error = ""
      state.loading = false
    })
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.data = []
      state.error = action.error.message
      state.loading = false
    })
  },
})

export const { alterArray } = recipeSlice.actions
export default recipeSlice.reducer
