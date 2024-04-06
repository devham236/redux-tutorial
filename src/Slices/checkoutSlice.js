import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { value: [] },
  reducers: {
    addToCheckout: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

export const { addToCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
