import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


const GetOneHotel = () => { 

  const navigate = useNavigate()

  const { id, hotelId } = useParams()

  const [ city, setCity ] = useState([])
  const [ hotel, setHotel ] = useState(null)
  const [ errors, setErrors ] = useState(false)

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
      <Row>
        { hotel ? 
          <>
            <Col xs='12'><h1>{hotel.name}</h1><hr/></Col>
            <Col md='6'>
              <img src={hotel.image} alt={hotel.name} />
            </Col>
            <Col md='6'>
              <h3><span>🤤</span> Description </h3>
              <p>{hotel.description}</p>
              <hr />
              <Link to={`/cities/${id}`} className='btn btn-secondary mt-3'>Back to List</Link>
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