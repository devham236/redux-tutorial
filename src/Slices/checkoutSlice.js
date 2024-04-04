import { createSlice } from "@reduxjs/toolkit"
import { hideModal } from "./modalSlice"

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { value: [] },
  reducers: {
    addToCheckout: (state, action) => {
      state.value.push(action.payload)
      hideModal()
    },
  },
})

export const { addToCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
