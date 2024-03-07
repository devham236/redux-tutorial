import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

export const themeSlice = createSlice({
  name: "them",
  initialState: { value: initialState },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeColor } = themeSlice.actions

export default themeSlice.reducer
