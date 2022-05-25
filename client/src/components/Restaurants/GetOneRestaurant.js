import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams, Pathname } from 'react-router-dom'

import { userIsAuthenticated } from '../helpers/auth.js'

import Container from 'react-bootstrap/Container'
import { Row, Col, Button, Card } from 'react-bootstrap'
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
    <Container className='mt-3 one-restaurant'>
      <Row className='get-one-row'>
        {restaurant ?
          <>
            <Card className='p-0 one-card text-white'>
              <Card.Img className='one-image' src={restaurant.image} alt={restaurant.name} />
              <Card.ImgOverlay>
                <Card.Title className='card-title'>{restaurant.name} </Card.Title>
                <hr />
                <Card.Text>
                  {restaurant.description}
                </Card.Text>
                <div className='button-box' style={{ position: 'absolute', bottom: 10, left: 10 }}>
                  <Link to={`/cities/${id}`} rel="noreferrer" className=' btn ' >Return to City</Link>
                  <div>
                    <Button href={restaurant.link} target='_blank' rel="noreferrer">Website</Button>

                    {userIsAuthenticated() ?
                      <Link className='btn btn-success mtb-3' to={`/cities/${id}/restaurants/${restaurantId}/review`}>Add Review</Link>
                      :
                      <Link className='btn btn-success mtb-3' to={'/login'}>Login</Link>
                    }
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
            {/* <Col xs='12'><h1 className='fs-1'>{restaurant.name}</h1><hr /></Col> */}
            {/* <Col md='6' className='p-0'>
              <img className='one-image' src={restaurant.image} alt={restaurant.name} />
            </Col> */}
            <Container>
              <Row className='review-row'>
                {restaurant.reviews.map((review, n) => {
                  return (
                    <Card className='reviewCard' key={id}>
                      <div>
                        <Stars rating={review.rating} />
                        <h2>By {review.name}</h2>
                        <p>{review.text}</p>
                      </div>
                      <img variant="top" src={review.image} className='reviewImage' />
                    </Card>
                  )
                })}
              </Row>
            </Container>
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
