import { configureStore } from "@reduxjs/toolkit"
import recipesReducer from "../Slices/recipesSlice"
import modalReducer from "../Slices/modalSlice"
import checkoutReducer from "../Slices/checkoutSlice"

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
  },
})
