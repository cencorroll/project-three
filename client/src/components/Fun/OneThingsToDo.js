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



const GetFun = () => {

  const navigate = useNavigate()

  const { id, funId } = useParams()

  const [city, setCity] = useState([])
  const [fun, setFun] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getFun = async () => {
      try {
        const { data } = await axios.get(`/api/cities/${id}/fun/${funId}`)
        console.log(data)
        setFun(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getFun()
  }, [funId])


  return (
    <Container className='mt-3'>
      <Row className='get-one-row'>
        {fun ?
          <>
            <Card className='p-0 one-card text-white'>
              <Card.Img className='one-image' src={fun.image} alt={fun.name} />
              <Card.ImgOverlay>
                <Card.Title className='card-title'>{fun.name} </Card.Title>
                <hr />
                <Card.Text>
                  {fun.description}
                </Card.Text>
                <div className='button-box' style={{ position: 'absolute', bottom: 10 }}>
                  <Link to={`/cities/${id}`} rel="noreferrer" className=' btn ' >Return to City</Link>
                  <div>
                    <Button href={fun.link} target='_blank' rel="noreferrer">Website</Button>

                    {userIsAuthenticated() ?
                      <Link className='btn btn-success mtb-3' to={`/cities/${id}/fun/${funId}/review`}>Add Review</Link>
                      :
                      <Link className='btn btn-success mtb-3' to={'/login'}>Login</Link>
                    }
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
            <Container>
              <Row className='review-row'>
                {fun.reviews.map((review, n) => {
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
            {/* <Col md='6'>
              <ul>
                {fun.reviews.map((review, n) => {
                  return <li key={n}>
                    <div className="reviewHeader">
                      <p><strong>By {review.name}</strong></p>
                    </div>
                    <img src={review.image} className='reviewImage' alt="User Review Picture" />
                  </li>
                })}
              </ul>
            </Col> */}
          </>
          :
          <h2 className='text-center'>
            {errors ? 'No Fun In Here :(' : 'Looking 👀...'}
          </h2>
        }
      </Row>
    </Container>
  )
}

export default GetFun