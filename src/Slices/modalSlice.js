import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: null },
  reducers: {
    showModal: (state, action) => {
      state.value = action.payload
    },
    hideModal: (state, action) => {
      state.value = null
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions
export default modalSlice.reducer
