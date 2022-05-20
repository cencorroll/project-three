import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const AllThingsToDo = () => {

  const { id } = useParams

  const [funList, setFunList] = useState([])

  //useEffects

  useEffect(() => {
    const getFunList = async () => {
      try {
        const { data } = await axios.get(`api/cities/${id}/fun`)
        console.log(data)
        setFunList(data)
        console.log('loging',data)
      } catch (error) {
        console.log(error)
      }
    }
    getFunList()
  }, [id])


  return (
    <Container>
      <Row>
        {funList.map(fun => {
          const { _id, name, image } = fun
          return (
            <Col key={_id} lg="3" md="6" className='fun container-fluid mb-4'>
              <Link to={`/Cities/${id}/fun/${_id}`}>
                <Card>
                  <Card.Img className="img-fluid" variant="top" src={image} />
                  <Card.Body >
                    <Card.Title className="text-center mb-0">{name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        }
        )}
      </Row>
    </Container >

  )
}

export default AllThingsToDo