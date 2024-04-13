import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { value: [] },
  reducers: {
    addToCheckout: (state, action) => {},
    removeFromCheckout: (state, action) => {},
  },
})

export const { addToCheckout, removeFromCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
