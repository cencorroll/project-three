import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Home from './components/Home'
import CitiesShow from './components/Cities/CitiesShow'
// import FullPageCities from '../src/components/Cities/FullPageCities'
import AllThingsToDo from './components/Fun/AllThingsToDo'
import OneThingsToDo from './components/Fun/OneThingsToDo'
import PageNotFound from './components/utilities/PageNotFound'


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
          <Route path="/" element={<CitiesShow />} />
          <Route path="/:id/fun" element={<AllThingsToDo />} />
          <Route path="/:id/fun/:funId" element={<OneThingsToDo />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
