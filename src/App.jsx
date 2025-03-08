import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

const router = createBrowserRouter([
  {
    path : '/',
    element : <ProductList />
  },
  {
    path : '/cart',
    element : <Cart />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App