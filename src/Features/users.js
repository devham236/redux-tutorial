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
  },
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer
