import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppProduct from '../../pages/Product'
import ProductForm from '../../pages/ProductForm'

export default function AppRouter() {
  return <>
  <Router>
    <Routes>
        <Route path='/' element={<AppProduct />}/>
        <Route path='product-form' element={<ProductForm />}/>
        <Route path='product-form/:id' element={<ProductForm />}/>
    </Routes>
  </Router>
  </>
}
