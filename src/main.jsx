import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import recipesReducer from "./Slices/recipeSlice.js"
import favoritesReducer from "./Slices/favoritesSlice.js"
import { BrowserRouter } from "react-router-dom"
import modalReducer from "./Slices/modalSlice.js"

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
    modal: modalReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
