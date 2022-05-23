import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

// import '~mdb-ui-kit/css/mdb.min.css'
// import { MDBRipple } from 'mdb-react-ui-kit'

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
        console.log('FUN->', data.thingsToDo)
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
  }, [id])

  return (
    <Container className="mt-4">
      <>
        <div className='header-img'>
          <Card.Img src={cities.image} />
          <Card.Body>
            <h1>{cities.name}</h1>
          </Card.Body>
        </div>
        {/* <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
          <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
          <a href='#!'>
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <p className='text-white mb-0'>Can you see me?</p>
              </div>
            </div>
            <div className='hover-overlay'>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
            </div>
          </a>
        </MDBRipple> */}
      </>
      <Link to="/" className="btn btn-secondary">
        Back to Cities
      </Link>
      <hr />
      <Carousel variant="dark" style={{ cursor: 'pointer' }}>
        {citiesFun.map((fun) => {
          return (
            <Carousel.Item interval={2000} key={fun._id}>
              <Link to={`/api/cities/${cities._id}/fun/${fun._id}`} key={fun._id}>
                <img key={fun._id} className="d-block w-100" src={fun.image} alt={fun.name} />
              </Link>
              <Carousel.Caption>
                <h5 key={fun._id}>{fun.name}</h5>
                <p key={fun._id}>{fun.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <hr />
      <Carousel variant="dark" style={{ cursor: 'pointer' }}>
        {citiesHotels.map((hotel) => {
          return (
            <Carousel.Item interval={2000} key={hotel._id}>
              <Link to={`/api/cities/${cities._id}/hotels/${hotel._id}`} key={hotel._id}>
                <img key={hotel._id} className="d-block w-100" src={hotel.image} alt={hotel.name} />
              </Link>
              <Carousel.Caption>
                <h5 key={hotel._id}>{hotel.name}</h5>
                <p key={hotel._id}>{hotel.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <hr />
      <Carousel variant="dark" style={{ cursor: 'pointer' }}>
        {citiesRestaurants.map((restaurant) => {
          return (
            <Carousel.Item interval={2000} key={restaurant._id}>
              <Link to={`/api/cities/${cities._id}/restaurants/${restaurant._id}`} key={restaurant._id}>
                <img key={restaurant._id} className="d-block w-100" src={restaurant.image} alt={restaurant.name} />
              </Link>
              <Carousel.Caption>
                <h5 key={restaurant._id}>{restaurant.name}</h5>
                <p key={restaurant._id}>{restaurant.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default CitiesShow
