import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CityList = ({ filteredCities }) => {
  return (
    <Container className='city-list'>
      <Row>
        {filteredCities.map(city => {
          const { _id, name, image } = city
          return (
            <Col key={_id} md='6' lg='4' className='city mb-4'>
              <Link to={`cities/${_id}`}>
                <Card>
                  <Card.Img variant='top' src={image} />
                  <Card.Body className='bd-light'>
                    <Card.Title className='text-center mb-0'>
                      {name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default CityList