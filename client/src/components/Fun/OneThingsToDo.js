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
import Image from 'react-bootstrap/Image'


const GetFun = () => { 

  const navigate = useNavigate()

  const { id, funId } = useParams()

  const [ city, setCity ] = useState([])
  const [ fun, setFun ] = useState(null)
  const [ errors, setErrors ] = useState(false)

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
      <Row>
        { fun ? 
          <>
            <Col xs='12'><h1>{fun.name}</h1><hr/></Col>
            <Col md='6'>
              <img src={fun.image} alt={fun.name} />
            </Col>
            <Col md='6'>
              <h3><span>🤤</span> Description </h3>
              <p>{fun.description}</p>
              <hr />
              <Link to={`/cities/${id}`} className='btn btn-secondary mt-3 ' style={{ marginRight: '1.5rem' }}>Back to List</Link>
              {userIsAuthenticated() ? 
                <Link className='btn btn-success mt-3' to={`/cities/${id}/fun/${funId}/review`}>Add Review</Link>
                :
                <Link className='btn btn-success mt-3' to={'/login'}>Add Review</Link>
              }
              <ul>
                {fun.reviews.map((review, n) => {
                  return <li key={n}>
                    {/* <Link to={`/user/${review.owner._id}`}> */}
                    <div className="reviewHeader">
                      <p><strong>By {review.owner.username}</strong></p>
                    </div>
                    <Stars rating={review.rating} />
                    <p>{review.text}</p>
                    {review.image &&
                      <img src={review.image} className='reviewImage' alt="users attempt" />
                    }
                    {/* </Link> */}
                  </li>
                })}
              </ul>
            </Col>
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