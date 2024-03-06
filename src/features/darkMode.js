import { createSlice } from "@reduxjs/toolkit"

const initialState = false

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: { value: initialState },
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
})

export const { toggle } = darkModeSlice.actions

export default darkModeSlice.reducer
