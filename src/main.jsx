import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataProvider from './context/DataContext.jsx'
import CartProvider from './context/CartContext.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClerkProvider } from '@clerk/react'
  import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
      <ClerkProvider>
        <App />
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      </ClerkProvider>
           </CartProvider>
    </DataProvider>
  </StrictMode>,
)
