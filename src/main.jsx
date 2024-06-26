import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { BrowserRouter } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import recipesReducer from "./Slices/recipesSlice.js"
import modalReducer from "./Slices/modalSlice.js"
import checkoutReducer from "./Slices/checkoutSlice.js"

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
