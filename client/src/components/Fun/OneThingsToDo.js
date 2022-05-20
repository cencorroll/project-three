import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
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
              <Link to={`/api/cities/${id}`} className='btn btn-secondary'>Back to List</Link>
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

export default GetFun