import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import recipesReducer from "./Slices/recipeSlice.js"

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)
