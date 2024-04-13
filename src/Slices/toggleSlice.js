import { createSlice } from "@reduxjs/toolkit"

const toggleSlice = createSlice({
  name: "toggleRecipes",
  initialState: { value: { showMoreOrLess: false, onlyEasy: false } },
  reducers: {
    switchMoreOrLess: (state, action) => {
      state.value.showMoreOrLess = !state.value.showMoreOrLess
    },
  },
})

export const { switchMoreOrLess } = toggleSlice.actions
export default toggleSlice.reducer
