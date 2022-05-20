import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Home from './components/Home'
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

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/cities/') // * <-- replace with your endpoint
      // console.log(data)
    }
    getData()
  })

  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        {/* <PageNav /> */}
        <Routes>
          <Route path="/" element={<CitiesIndex />} />
          <Route path="/api/cities/:id" element={<CitiesShow />} />
          {/* <Route path="/api/cities/:id/fun" element={<AllThingsToDo />} /> */}
          <Route path="/api/cities/:id/fun/:funId" element={<OneThingsToDo />} />
          <Route path='/api/cities/:id/restaurants/:restaurantId' element={<GetOneRestaurant />} />
          <Route path='/api/cities/:id/hotels/:hotelId' element={<GetOneHotel />} />
          <Route path='/api/cities/:id/fun/:funId' element={<GetFun />} />
          <Route path="*" element={<PageNotFound />} />


          {/* <Route path="/" element={<CitiesIndex/>} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
