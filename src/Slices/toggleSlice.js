import { createSlice } from "@reduxjs/toolkit"

const toggleSlice = createSlice({
  name: "toggleRecipes",
  initialState: { value: false },
  reducers: {},
})

export default toggleSlice.reducer
