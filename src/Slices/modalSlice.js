import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: null },
  reducers: {
    showModal: (state, action) => {
      state.value = action.payload
    },
    closeModal: (state) => {
      state.value = null
    },
  },
})

console.log(modalSlice)

export const { showModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
