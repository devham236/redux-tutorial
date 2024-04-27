import { createSlice } from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { value: [] },
  reducers: {
    addToCheckout: (state, action) => {
      state.value.push(action.payload)
    },
    removeFromCheckout: (state, action) => {
      state.value = state.value.filter(
        (recipe) => recipe.id != action.payload.id
      )
    },
  },
})

export const { addToCheckout, removeFromCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
