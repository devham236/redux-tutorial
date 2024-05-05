import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: null },
  reducers: {
    openModal: (state, action) => {
      state.value = action.payload
    },
    closeModal: (state) => {
      state.value = null
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
