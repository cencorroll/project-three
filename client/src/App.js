import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CitiesIndex from './components/CitiesIndex'

const App = () => {

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/cities/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <>

      <BrowserRouter>
        {/* <PageNav /> */}
        <Routes>
          <Route path="/" element={<CitiesIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
