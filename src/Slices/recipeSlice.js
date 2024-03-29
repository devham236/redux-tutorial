import { createSlice } from "@reduxjs/toolkit"

const recipeSlice = createSlice({
  name: "recipes",
  initialState: { value: [] },
  reducers: {},
})

export default recipeSlice.reducer
