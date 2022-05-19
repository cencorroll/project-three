import React, { useEffect, useState, useNavigate } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Col, Container, Row, Card, Img } from 'react-bootstrap'

const Home = () => {

  const [cities, setCities] = useState([])
  const [randomCity, setRandomCity] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/cities/')
        setCities(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    console.log(randomCity)
    setRandomCity(randomCity)
  }, [])

  return (
    <>
      <Container>
        <img src={randomCity.image} />
        <h1>{randomCity.name}</h1>
      </Container>
      <Container className='launch-list'>
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
      </Container>
    </>
  )
}

export default Home