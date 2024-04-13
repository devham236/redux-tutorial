import { createSlice } from "@reduxjs/toolkit"

const toggleSlice = createSlice({
  name: "toggleRecipes",
  initialState: { value: { showMoreOrLess: false, onlyEasy: false } },
  reducers: {
    switchState: (state, action) => {
      state.value[action.payload] = !state.value[action.payload]
    },
  },
})

export const { switchState } = toggleSlice.actions
export default toggleSlice.reducer
