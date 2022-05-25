import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom'



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
          <Card className='city-hero'>
            <Card.Img src={cities.image} />
            <Card.ImgOverlay>
              <Card.Header className='card-header text-white bg-secondary.bgtransparent fs-1 fw-bold text-uppercase' >{cities.name}</Card.Header>
              <div className='button-box' style={{ position: 'absolute', bottom: 10, left: 20 }}>
                <hr />
                <Link to={'/'} rel="noreferrer" className=' btn ' >Return to Cities</Link>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </>
      <hr />
      <h3 className='carousel-title' id='todo'>Things to do</h3>
      <Carousel className='carousel' variant="dark" style={{ cursor: 'pointer' }}>
        {citiesFun.map((fun) => {
          return (
            <Carousel.Item interval={4000} key={fun._id}>
              <Link to={`/cities/${cities._id}/fun/${fun._id}`}>
                <img key={fun._id} className="d-block w-100 carousel-img" src={fun.image} alt={fun.name} />
              </Link>
              <Carousel.Caption>
                <h5 className='caption'>{fun.name}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <hr />
      <h3 className='carousel-title' id='stay'>Places to Stay</h3>
      <Carousel className='carousel' variant="dark" style={{ cursor: 'pointer' }}>
        {citiesHotels.map((hotel) => {
          return (
            <Carousel.Item interval={4000} key={hotel._id}>
              <Link to={`/cities/${cities._id}/hotels/${hotel._id}`} >
                <img className="d-block w-100 carousel-img" src={hotel.image} alt={hotel.name} />
              </Link>
              <Carousel.Caption>
                <h5 className='caption'>{hotel.name}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <hr />
      <h3 className='carousel-title' id='eat'>Places to Eat</h3>
      <Carousel className='carousel' variant="dark" style={{ cursor: 'pointer' }}>
        {citiesRestaurants.map((restaurant) => {
          return (
            <Carousel.Item className='carousel-flexbox' interval={4000} key={restaurant._id}>
              <Link to={`/cities/${cities._id}/restaurants/${restaurant._id}`} >
                <img className="d-block w-100 carousel-img" src={restaurant.image} alt={restaurant.name} />
              </Link>
              <Carousel.Caption>
                <h5 className='caption'>{restaurant.name}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default CitiesShow
