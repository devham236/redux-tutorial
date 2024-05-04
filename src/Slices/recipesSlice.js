import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getRecipes = createAsyncThunk("recipe/getRecipe", async () => {
  return fetch("/data.json")
    .then((res) => res.json())
    .then((data) => data)
})

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
    builder.addCase(getRecipes.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ""
    })
    builder.addCase(getRecipes.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error
    })
  },
})

export const { toggleValues } = recipesSlice.actions
export default recipesSlice.reducer
