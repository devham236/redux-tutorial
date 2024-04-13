import { createSlice } from "@reduxjs/toolkit"
import { getRecipes } from "../Utils/getRecipes"

const recipesData = await getRecipes()

const recipesSlice = createSlice({
  name: "recipes",
  initialState: { value: recipesData },
  reducers: {},
})

export default recipesSlice.reducer