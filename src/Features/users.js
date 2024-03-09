import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "users",
  initialState: { value: [] },
  reducers: {
    addUser: (state, action) => {},
  },
})
