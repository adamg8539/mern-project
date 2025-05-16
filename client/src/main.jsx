import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './App.jsx'
import GlobalState from './context/index.jsx'
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <RouterProvider router={router} />
  </GlobalState>,
)
