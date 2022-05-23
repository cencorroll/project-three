import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/main.css'


//Components
import Home from './components/Home'
import PageNavBar from './components/PageNavBar'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Profile from './components/Profile'
// import components
import CitiesShow from './components/Cities/CitiesShow'
import AllThingsToDo from './components/Fun/AllThingsToDo'
import OneThingsToDo from './components/Fun/OneThingsToDo'
import GetOneRestaurant from './components/Restaurants/GetOneRestaurant'
import PageNotFound from './components/utilities/PageNotFound'


import CitiesIndex from './components/Cities/CitiesIndex'
import GetOneHotel from './components/Hotels/GetOneHotel'
import GetFun from './components/Fun/OneThingsToDo'
// import FullPageCities from '../src/components/Cities/FullPageCities'
const App = () => {

  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cities" element={<CitiesIndex/>} />
          <Route path="/" element={<CitiesIndex />} />
          <Route path="/cities/:id" element={<CitiesShow />} />
          <Route path="/api/cities/:id/fun" element={<AllThingsToDo />} />
          <Route path="/cities/:id/fun/:funId" element={<OneThingsToDo />} />
          <Route path='/cities/:id/restaurants/:restaurantId' element={<GetOneRestaurant />} />
          <Route path='/cities/:id/hotels/:hotelId' element={<GetOneHotel />} />
          <Route path='/cities/:id/fun/:funId' element={<GetFun />} />
          <Route path="*" element={<PageNotFound />} />


          {/* <Route path="/" element={<CitiesIndex/>} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
