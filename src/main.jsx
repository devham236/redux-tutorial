import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import userReducer from "./features/user.js"
import darkModeReducer from "./features/darkMode.js"
import themeReducer from "./features/theme.js"

const store = configureStore({
  reducer: {
    user: userReducer,
    darkMode: darkModeReducer,
    theme: themeReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
