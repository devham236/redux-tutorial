import { createSlice } from "@reduxjs/toolkit"
import { UsersData } from "../Utils/fakeData"

const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    },
    deleteUser: (state, action) => {
      const filteredArray = state.value.filter(
        (user) => user.id !== action.payload
      )
      state.value = filteredArray
    },
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

export const { addUser, deleteUser, updateUser } = userSlice.actions

export default userSlice.reducer
