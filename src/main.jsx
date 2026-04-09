import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import BookProvider from './context/BookContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <ToastContainer></ToastContainer>
    <RouterProvider router={router}/>
    </BookProvider>
  </StrictMode>,
)
 