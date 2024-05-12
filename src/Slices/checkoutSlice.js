import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { data: [] },
  reducers: {
    addToCheckout: (state, action) => {
      state.data.push(action.payload)
    },
    removeFromCheckout: (state, action) => {
      state.data = state.data.filter((recipe) => recipe.id != action.payload.id)
    },
  },
})

export const { addToCheckout, removeFromCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
