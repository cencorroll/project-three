import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { useNavigate, Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CitiesIndex = () => {

  const navigate = useNavigate()
  const [cities, setCities] = useState([])
  const [randomCities, setRandomCities] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios.get('/api/cities')
        setCities(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCities()
  }, [])

  useEffect(() => {
    const getRandomCity = () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)]
      console.log(randomCity)
      setRandomCities(randomCity)
    }
    getRandomCity()
  }, [cities])

  const slideLeft = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <Container>
        {
          randomCities ?
            <>
              <Link to={`cities/${randomCities._id}`}>
                <img
                  className='w-full h-[440px] object-cover'
                  src={randomCities.image}
                  alt=''
                />
                <Card.Body>
                  <h1>{randomCities.name}</h1>
                </Card.Body>
              </Link>
            </>
            :
            <div className='text-center'>
              {errors ? 'Something went wrong. Please try again later!' : <h2>Loading...</h2>}
            </div>
        }
      </Container>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {cities.map(city => {
            const { image } = city
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={image}
              alt='/' />
          })}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>

  //? old code below
  // <>
  //   <Container>
  //     {
  //       randomCities ?
  //         <>
  //           <Link to={`api/cities/${randomCities._id}`}>
  //             <Card.Img src={randomCities.image} />
  //             <Card.Body>
  //               <h1>{randomCities.name}</h1>
  //             </Card.Body>
  //           </Link>
  //         </>
  //         :
  //         <div className='text-center'>
  //           {errors ? 'Something went wrong. Please try again later!' : <h2>Loading...</h2>}
  //         </div>
  //     }
  //   </Container>

  //   <Container className='city-list'>
  //     <Row>
  //       {cities.map(city => {
  //         const { _id, name, origin, image } = city
  //         return (
  //           <Col key={_id} md='6' lg='4' className='city mb-4'>
  //             <Link to={`api/cities/${_id}`}>
  //               <Card>
  //                 <Card.Img variant='top' src={image} />
  //                 <Card.Body className = 'bd-light'>
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
  // </>
  )
}


export default CitiesIndex