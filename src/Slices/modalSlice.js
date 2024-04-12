import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: null },
  reducers: {
    showModal: (state, action) => {
      state.value = action.payload.recipe
    },
    closeModal: (state, action) => {
      state.value = null
    },
  },
})

export const { showModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
