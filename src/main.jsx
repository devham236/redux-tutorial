import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

const store = configureStore({
  reducer: {},
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
