import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams, Pathname } from 'react-router-dom'

import { userIsAuthenticated } from '../helpers/auth.js'

import Container from 'react-bootstrap/Container'
import { Row, Col, Button } from 'react-bootstrap'
import Stars from '../Reviews/StarRating'



const GetOneRestaurant = () => {

  const navigate = useNavigate()

  const { id, restaurantId } = useParams()

  const [city, setCity] = useState([])
  const [restaurant, setRestaurant] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const { data } = await axios.get(`/api/cities/${id}/restaurants/${restaurantId}`)
        console.log(data)
        setRestaurant(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getRestaurant()
  }, [restaurantId])


  return (
    <Container className='mt-3'>
      <Row className='get-one-row'>
        {restaurant ?
          <>
            <Col xs='12'><h1 className='fs-1'>{restaurant.name}</h1><hr /></Col>
            <Col md='6'>
              <img src={restaurant.image} alt={restaurant.name} />
            </Col>
            <Col md='6'>
              <div className="info-box">
                <h3><span>🤤</span> Description </h3>
                <p>{restaurant.description}</p>
                <hr />
                <p>{restaurant.location}</p>
                <p>{restaurant.price}</p>
                <Button href={restaurant.link} target='_blank' rel="noreferrer">Website</Button>
              </div>

              
              <Link to={`/cities/${id}`} className='btn btn-secondary mt-3 mb-3' style={{ marginRight: '1.5rem' }}>Back to List</Link>
              {userIsAuthenticated() ?
                <Link className='btn btn-success mtb-3' to={`/cities/${id}/restaurants/${restaurantId}/review`}>Add Review</Link>
                :
                <Link className='btn btn-success mtb-3' to={'/login'}>Login</Link>
              }
              <ul>
                {restaurant.reviews.map((review, i) => {
                  return <li key={i}>
                    {/* <Link to={`/user/${review.owner._id}`}> */}
                    <div className="reviewHeader">
                      <p><strong>By {review.owner}</strong></p>
                    </div>
                    <Stars rating={review.rating} />
                    <p>{review.text}</p>
                    <img src={review.image} className='reviewImage' alt="User Review Picture" />
                    {/* </Link> */}
                  </li>
                })}
              </ul>
            </Col>
          </>
          :
          <h2 className='text-center'>
            {errors ? 'No Restaurant In Here :(' : 'Looking 👀...'}
          </h2>
        }
      </Row>
    </Container>
  )
}

export default GetOneRestaurant
