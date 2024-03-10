import { createSlice } from "@reduxjs/toolkit"
import { UsersData } from "../Utils/fakeData"

const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  // Jeder key in der reducers property ist ein action type
  reducers: {
    // reducer function
    addUser: (state, action) => {
      state.value.push(action.payload)
    },
    // reducer function
    deleteUser: (state, action) => {
      const filteredArray = state.value.filter(
        (user) => user.id !== action.payload
      )
      state.value = filteredArray
    },
    // reducer function
    updateUser: (state, action) => {
      const matchingUser = state.value.find(
        (user) => user.id === action.payload.id
      )
      state.value[matchingUser.id - 1] = {
        ...matchingUser,
        username: action.payload.value,
      }
    },
  },
})

// Die reducer functions werden in der actions property gespeichert
export const { addUser, deleteUser, updateUser } = userSlice.actions

export default userSlice.reducer
