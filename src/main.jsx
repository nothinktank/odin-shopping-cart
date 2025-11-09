import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Profile from './Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Cart from './Cart.jsx'
import Shop from './Shop.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'Cart',
    element: <Cart />
  },
  {
    path: 'Shop',
    element: <Shop />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
