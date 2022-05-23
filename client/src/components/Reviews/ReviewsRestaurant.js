import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

import { FaStar } from 'react-icons/fa'
import { userIsAuthenticated } from '../helpers/auth'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const NewReview = () => { 
  const { id, restaurantId } = useParams()
  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    text: '',
    rating: 5,
    image: '',
  })

  const [ errors, setErrors ] = useState({ text: { message: '' } })

  const handleRating = (rating) => { 
    setFormData({ ...formData, rating })
  }

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault()
    !userIsAuthenticated() && navigate('/login')
    try {
      const { data } = await axios.post(`api/cities/${id}/restaurants/${restaurantId}/review`, formData, { 
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}`, 
        },
      })
      navigate(`api/cities/${id}/restaurants/${restaurantId}`)
      // navigate(`api/cities/${id}/restaurants/${restaurantId}`, { replace: true })

    } catch (error) {
      if (error.response.data.errors) setErrors(error.response.data.errors)
    }
  }

  // const handleImageUrl = (url) => {
  //   try {
  //     setFormData({ ...formData, image: url })
  //   } catch (error) {
  //     if (error.response.data.errors) setErrors(error.response.data.errors)
  //   }
  // }

  return (
    <section className='form-page'>
      <Container>
        <Row>
          <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-5'  onSubmit={handleSubmit}>
            <h1>Leave a Review!</h1>
            <label htmlFor="text">Text</label>
            <textarea className='input' name="text" placeholder='Text' value={formData.name} onChange={handleChange}/>
            {errors.text ? <p className='text-danger'>{errors.text}</p> : '' }
            {/* <label htmlFor='origin'>Origin</label>
            <input type='text' name='origin' placeholder='Origin'className='input' value={formData.origin} onChange={handleChange}/>
            {errors.origin ? <p className='text-danger'>{errors.origin}</p> : ''}
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' placeholder='Description' className='input' value={formData.description} onChange={handleChange}/>
            {errors.description && <p className='text-danger'>{errors.description}</p>} */}
            <label htmlFor='image'>Picture</label>
            <input type='text' name='image' placeholder='Picture' className='input' value={formData.image} onChange={handleChange}/>
            {errors.image && <p className='text-danger'>{errors.image}</p>}
            <button type='submit' className='btn'>Submit</button>
          </form>
        </Row>
      </Container>
    </section>
  )

}

export default NewReview