import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useNavigate, Link, useParams } from 'react-router-dom'

import { Container, Row, Col, Card, Form, FormControl, Spinner } from 'react-bootstrap'

const CitiesIndex = () => {

  const navigate = useNavigate()
  const [cities, setCities] = useState([])
  const [randomCities, setRandomCities] = useState([])
  const [errors, setErrors] = useState(false)
  const [filters, setFilters] = useState({
    city: 'All',
    searchTerm: '',
    country: 'All',
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
      // console.log(randomCity)
      setRandomCities(randomCity)
    }
    getRandomCity()
  }, [cities])

  //? searchbar filter
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFilters({ ...filters, [e.target.name]: e.target.value })
    console.log('filtered list ->', filters)
  }

  useEffect(() => {
    if (cities.length) {
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      console.log(regexSearch)
      const filtered = cities.filter(city => {
        return regexSearch.test(city.name) || regexSearch.test(city.country) || (filters.name === 'All')
      })
      setFilteredCities(filtered)
      console.log(filteredCities)
    }
  }, [filters, cities])

  filteredCities.sort()
  return (
    <>
      <Container>
        {
          randomCities ?
            <>
              <Link to={`/cities/${randomCities._id}`}>
                <Card.Body className='randomImg' style={{ backgroundImage: `url(${randomCities.image})` }}>
                  <h1 className='randomImgText'>Discover {randomCities.name}</h1>
                </Card.Body>
                {/* <Card className='p-0 one-card text-white'>
                  <Card.Img className='one-image' src={randomCities.image} alt={randomCities.name} />
                  <Card.ImgOverlay>
                    <Card.Text className='card-title' style={ { display: 'flex', justifyContent: 'center', alignContent: 'center' } }> Discover {randomCities.name} </Card.Text>
                  </Card.ImgOverlay>
                </Card> */}
              </Link>
            </>
            :
            <div className='text-center'>
              {errors ? 'Something went wrong. Please try again later!' : <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>}
            </div>
        }
      </Container>

      <Form>
        <Form.Group className='search'>
          <FormControl className='search-bar' type="search" name="searchTerm" value={filters.searchTerm} placeholder="Where do you want to go? 🇪🇺" onChange={handleChange} />
        </Form.Group>
      </Form>

      <Container className='city-list'>
        <Row>
          {filteredCities.map((city) => {
            const { _id, name, image } = city
            return (
              <Col key={_id} md='6' lg='4' className='city mb-4'>
                <Link to={`/cities/${_id}`}>
                  <Card>
                    <Card.Img className='card-img' variant='top' src={image} />
                    <Card.Body className='bd-light'>
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