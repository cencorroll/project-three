import React, { useEffect, useState, useNavigate } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Col, Container, Row, Card, Img } from 'react-bootstrap'

const Home = () => {

  const [cities, setCities] = useState([])
  const [randomCities, setRandomCities] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios.get('/api/cities/')
        setCities(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
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
              {errors ? 'Something went wrong! Please try again later!' : <h2>Loading...</h2>}
            </div>
        }

      </Container>
      {/* <Container className='launch-list'>
        <Row>
          {cities.map(city => {
            const { name, _id, image } = city
            return (
              <Col key={_id} md='5' lg='4' className='launch'>
                <Link to={`/cities/${_id}`}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container> */}
    </>
  )
}

export default Home