import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Home from './components/Home'
import PageNavBar from './components/PageNavBar'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
