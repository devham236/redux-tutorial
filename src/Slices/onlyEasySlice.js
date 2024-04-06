import { createSlice } from "@reduxjs/toolkit"

const onlyEasySlice = createSlice({
  name: "onlyEasy",
  initialState: { value: false },
  reducers: {
    toggleState: (state, action) => {
      state.value = !state.value
    },
  },
})

export const { toggleState } = onlyEasySlice.actions
export default onlyEasySlice.reducer
