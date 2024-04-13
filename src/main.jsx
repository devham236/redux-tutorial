import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import recipesReducer from "./Slices/recipesSlice.js"
import toggleReducer from "./Slices/toggleSlice.js"
import modalReducer from "./Slices/modalSlice.js"
import checkoutReducer from "./Slices/checkoutSlice.js"

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    toggle: toggleReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
