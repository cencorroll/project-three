import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CitiesShow = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [cities, setCities] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios.get('api/cities')
        console.log(data)
        setCities(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getCities()
  }, [])

  return (
    <Container className='mt-3'>
      <Carousel variant="dark" style={{ width: '70%' }}>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://media.istockphoto.com/photos/eiffel-tower-in-paris-skyline-at-dawn-picture-id1280246120?b=1&k=20&m=1280246120&s=170667a&w=0&h=9g8hb-FTp7TfrN6gItpxDFKG0wPjwvnZQlNHZaxyeeI="
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://media.istockphoto.com/photos/eiffel-tower-aerial-view-paris-picture-id1145422105?k=20&m=1145422105&s=612x612&w=0&h=IVTtz9ao9ywd5AltRNbr_K64LeuHeJ68J9ivjpztbEs="
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://kkhotels-ce53.kxcdn.com/wp-content/uploads/2020/01/Paris-City-Eiffeltower-View.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )

  // return (
  //   <Container className='city-list'>
  //     <Row>
  //       {cities.map(city => {
  //         const { _id, name, image } = city
  //         return (
  //           <Col key={_id} md='6' lg='4' className='bread mb-4'>
  //             <Link to={`/cities/${_id}`}>
  //               <Card>
  //                 <Card.Img varian='top' src={image} />
  //                 <Card.Body className='bd-light'>
  //                   <Card.Title className='text-center mb-0'>
  //                     {name}
  //                   </Card.Title>
  //                 </Card.Body>
  //               </Card>
  //             </Link>
  //           </Col>
  //         )
  //       })}
  //     </Row>
  //   </Container>
  // )


}


export default CitiesShow