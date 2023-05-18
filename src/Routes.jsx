import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './Pages/App'
import "./assets/css/responsive.css"
const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>} />
    </Routes>
  )
}

export default Main