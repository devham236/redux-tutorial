import { createSlice } from "@reduxjs/toolkit"

const toggleSlice = createSlice({
  name: "toggleRecipes",
  initialState: { value: false },
  reducers: {
    switchState: (state, action) => {
      state.value = !state.value
    },
  },
})

export const { switchState } = toggleSlice.actions
export default toggleSlice.reducer
