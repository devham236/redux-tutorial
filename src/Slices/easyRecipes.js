import { createSlice } from "@reduxjs/toolkit"

const easyRecipes = createSlice({
  name: "easyRecipes",
  initialState: { value: false },
  reducers: {
    toggleState: (state, action) => {
      state.value = !state.value
    },
  },
})

export const { toggleState } = easyRecipes.actions
export default easyRecipes.reducer
