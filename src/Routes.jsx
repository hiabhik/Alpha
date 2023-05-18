import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import "./assets/css/responsive.css"
const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default Main