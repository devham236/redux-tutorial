import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import recipesReducer from "./Slices/recipeSlice.js"
import favoritesReducer from "./Slices/favoritesSlice.js"
import modalReducer from "./Slices/modalSlice.js"
import checkoutReducer from "./Slices/checkoutSlice.js"
import onlyEasyReducer from "./Slices/onlyEasySlice.js"

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
    onlyEasy: onlyEasyReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
