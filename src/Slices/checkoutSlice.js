import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { items: [] },
  reducers: {
    addToCheckout: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromCheckout: (state, action) => {
      state.items = state.items.filter(
        (recipe) => recipe.id != action.payload.id
      )
    },
  },
})

export const { addToCheckout, removeFromCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
