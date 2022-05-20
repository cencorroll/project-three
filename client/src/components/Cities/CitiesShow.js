import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import PageNotFound from '../utilities/PageNotFound'

const CitiesShow = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [cities, setCities] = useState([])
  const [citiesHotels, setCitiesHotels] = useState([])
  const [citiesRestaurants, setCitiesRestaurants] = useState([])
  const [citiesFun, setCitiesFun] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios.get(`/api/cities/${id}`)
        console.log(data)
        console.log(data.hotels)
        console.log('FUN->',data.thingsToDo)
        console.log('RESTAURANTS->', data.restaurants)
        setCities(data)
        setCitiesHotels(data.hotels)
        setCitiesRestaurants(data.restaurants)
        setCitiesFun(data.thingsToDo)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getCities()
  }, [navigate])

  return (

    <Container className="mt-4">
      <Row>

        <>
          <Col>
            <h2>{cities.name}</h2>
          </Col>
          <hr />
          <Col md="6">
            <Image rounded="false" fluid="true" className="mb-5" src={cities.image} alt={''} />
          </Col>
          <Col md="6" className="shadow-sm p-3 border">

            <Link to="/" className="btn btn-secondary">Back to Cities</Link>
          </Col>
        </>


      </Row>
      <hr />
      <Row>
        {citiesHotels.map(hotels => {
          const { _id, name, description, image } = hotels
          return (
            <Col key={_id} md='6' lg='4' className='hotel mb-4'>
              <Link to={`/api/cities/${cities._id}/hotels/${_id}`}>
                <Card>
                  <Card.Img varian='top' src={image} />
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
      <hr />
      <Row>
        {citiesFun.map(fun => {
          console.log(fun)
          const { _id, name, description, image } = fun
          return (
            <Col key={_id} md='6' lg='4' className='hotel mb-4'>
              <Link to={`/api/cities/${cities._id}/fun/${fun._id}`}>
                <Card>
                  <Card.Img varian='top' src={fun.image} />
                  <Card.Body className='bd-light'>
                    <Card.Title className='text-center mb-0'>
                      {fun.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
      <hr />
      <Row>
        {citiesRestaurants.map(restaurant => {
          const { _id, name, description, image } = restaurant
          return (
            <Col key={_id} md='6' lg='4' className='hotel mb-4'>
              <Link to={`/api/cities/${cities._id}/restaurants/${restaurant._id}`}>
                <Card>
                  <Card.Img varian='top' src={image} />
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
  )
}


export default CitiesShow