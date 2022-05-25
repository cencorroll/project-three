import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { userIsAuthenticated } from '../helpers/auth'

import { FaStar } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stars from '../Reviews/StarRating'
import { Card, Button } from 'react-bootstrap'



const GetOneHotel = () => {

  const navigate = useNavigate()

  const { id, hotelId } = useParams()

  const [city, setCity] = useState([])
  const [hotel, setHotel] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getHotel = async () => {
      try {
        const { data } = await axios.get(`/api/cities/${id}/hotels/${hotelId}`)
        console.log(data)
        setHotel(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getHotel()
  }, [hotelId])


  return (
    <Container className='mt-3'>
      <Row className='get-one-row'>
        {hotel ?
          <>
            <Card className='p-0 one-card text-white'>
              <Card.Img className='one-image' src={hotel.image} alt={hotel.name} />
              <Card.ImgOverlay>
                <Card.Title className='card-title'>{hotel.name} </Card.Title>
                <hr />
                <Card.Text>
                  {hotel.description}
                </Card.Text>
                <div className='button-box' style={{ position: 'absolute', bottom: 10, left: 10 }}>
                  <Link to={`/cities/${id}`} rel="noreferrer" className=' btn ' >Return to City</Link>
                  <div>
                    <Button href={hotel.link} target='_blank' rel="noreferrer">Website</Button>

                    {userIsAuthenticated() ?
                      <Link className='btn btn-success mtb-3' to={`/cities/${id}/hotels/${hotelId}/review`}>Add Review</Link>
                      :
                      <Link className='btn btn-success mtb-3' to={'/login'}>Login</Link>
                    }
                  </div>

                </div>


              </Card.ImgOverlay>
            </Card>
            <Col md='6'>
              <ul>
                {hotel.reviews.map((review, n) => {
                  return <li key={n}>
                    {/* <Link to={`/user/${review.owner._id}`}> */}
                    <div className="reviewHeader">
                      <p><strong>By {review.username}</strong></p>
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
            {errors ? 'No Hotel In Here :(' : 'Looking 👀...'}
          </h2>
        }
      </Row>
    </Container>
  )
}

export default GetOneHotel