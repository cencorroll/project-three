import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useNavigate, Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CitiesIndex = () => { 

  const navigate = useNavigate()
  const [ cities, setCities ] = useState([])
  const [randomCities, setRandomCities] = useState([])
  const [errors, setErrors] = useState(false)

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
  },[])

  useEffect(() => {
    const getRandomCity = () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)]
      console.log(randomCity)
      setRandomCities(randomCity)
    }
    getRandomCity()
  }, [cities])

  return ( 
    <>
      <Container>
        {
          randomCities ?
            <>
              <Link to={`/cities/${randomCities._id}`}>
                <Card.Img src={randomCities.image} />
                <Card.Body>
                  <h1>{randomCities.name}</h1>
                </Card.Body>
              </Link>
            </>
            :
            <div className='text-center'>
              {errors ? 'Something went wrong. Please try again later!' : <h2>Loading...</h2>}
            </div>
        }
      </Container>
    
      <Container className='city-list'>
        <Row>
          {cities.map(city => {
            const { _id, name, origin, image } = city
            return (
              <Col key={_id} md='6' lg='4' className='city mb-4'>
                <Link to={`api/cities/${_id}`}>
                  <Card>
                    <Card.Img varian='top' src={image} />
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