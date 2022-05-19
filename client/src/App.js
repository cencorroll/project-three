import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Home from './components/Home'
import PageNavBar from './components/PageNavBar'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import CitiesShow from './components/Cities/CitiesShow'
import CitiesIndex from './components/Cities/CitiesIndex'
// import FullPageCities from '../src/components/Cities/FullPageCities'
const App = () => {
  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cities" element={<CitiesIndex/>} />
          {/* <Route path="/" element={<CitiesIndex/>} /> */}
          <Route path="/api/cities/:id" element={<CitiesShow/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
