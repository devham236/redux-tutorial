import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { data: [] },
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload)
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload.id)
    },
  },
})

export const { addItem, removeItem } = checkoutSlice.actions
export default checkoutSlice.reducer
