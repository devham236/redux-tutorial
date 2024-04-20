import { createSlice } from "@reduxjs/toolkit"

const changeRecipesSlice = createSlice({
  name: "toggleRecipes",
  initialState: { value: { showMoreOrLess: false, onlyEasy: false } },
  reducers: {
    switchState: (state, action) => {
      state.value[action.payload] = !state.value[action.payload]
    },
  },
})

export const { switchState } = changeRecipesSlice.actions
export default changeRecipesSlice.reducer
