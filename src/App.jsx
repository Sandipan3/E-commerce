import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {path : '/', element : <ProductList /> },
      {path : '/cart', element : <Cart /> }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App