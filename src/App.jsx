import React from 'react'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'

const App = () => {
  return (
    <>
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/create" element = {<Create/>}/>
          <Route path = "/details/:id" element = {<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App