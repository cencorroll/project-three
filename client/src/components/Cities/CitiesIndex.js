import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { useNavigate, Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import CityList from '../Filtered Cities/CityList'

const CitiesIndex = () => {

  const navigate = useNavigate()
  const [cities, setCities] = useState([])
  const [randomCities, setRandomCities] = useState([])
  const [errors, setErrors] = useState(false)
  const [filters, setFilters] = useState({
    city: 'All',
    searchTerm: '',
  })
  const [filteredCities, setFilteredCities] = useState([])

  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios.get('/api/cities')
        setCities(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCities()
  }, [])

  useEffect(() => {
    const getRandomCity = () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)]
      console.log(randomCity)
      setRandomCities(randomCity)
    }
    getRandomCity()
  }, [cities])

  //? searchbar filter
  // const handleChange = (e) => {
  //   const newObj = {
  //     ...filters,
  //     [e.target.name]: e.target.value,
  //   }
  //   console.log(newObj)
  //   setFilters(newObj)
  // }

  // useEffect(() => {
  //   if (cities.length) {
  //     const regexSearch = new RegExp(filters.searchTerm, 'i')
  //     const filtered = cities.filter(city => {
  //       return regexSearch.test(city.name) && (city.name === filters.name || filters.name === 'All')
  //     })
  //     setFilteredCities(filtered)
  //     console.log(filteredCities)
  //   }
  // }, [filters, cities])

  return (
    <>
      <Container>
        {
          randomCities ?
            <>
              <Link to={`/cities/${randomCities._id}`}>
                {/* <Card.Img className='randomImg' src={randomCities.image} /> */}
                <Card.Body className='randomImg' style={{ backgroundImage: `url(${randomCities.image})` }}>
                  <h1 className='randomImgText'>Discover {randomCities.name}</h1>
                </Card.Body>
              </Link>
            </>
            :
            <div className='text-center'>
              {errors ? 'Something went wrong. Please try again later!' : <h2>Loading...</h2>}
            </div>
        }
      </Container>

      {/* //? input for filter below  */}
      {/* <Container>
        <input type="text" name="searchTerm" placeholder='Where do you want to go?' value={filters.searchTerm} onChange={handleChange} />
      </Container>
      
      <CityList filteredCities={filteredCities} /> */}

      <Container className='city-list'>
        <Row>
          {cities.map(city => {
            const { _id, name, origin, image } = city
            return (
              <Col key={_id} md='6' lg='4' className='city mb-4'>
                <Link to={`cities/${_id}`}>
                  <Card>
                    <Card.Img variant='top' src={image} />
                    <Card.Body className = 'bd-light'>
                      <Card.Title className='text-center mb-0'>
                        {name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default CitiesIndex