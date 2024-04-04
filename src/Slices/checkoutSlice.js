import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { value: [] },
  reducers: {
    addToCheckout: (state, action) => {
      console.log("works")
    },
  },
})

export const { addToCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
