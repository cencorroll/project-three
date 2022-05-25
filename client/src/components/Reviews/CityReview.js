import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { userIsAuthenticated } from '../helpers/auth'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Rating } from 'react-simple-star-rating'


const ReviewCity = () => { 

  const { id } = useParams()
  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    text: '',
    name: '',
    rating: 0,
  })

  const [ errors, setErrors ] = useState({})

  const handleRating = (rating) => { 
    setFormData({ ...formData, rating })
  }

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault()
    !userIsAuthenticated() && navigate('/login')
    try {
      await axios.post(`/api/cities/${id}/reviews`, formData, { 
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}`, 
        },
      })
      navigate(`/cities/${id}`)

    } catch (error) {
      if (error.response.data.errors) setErrors(error.response.data.errors)
    }
  }

  return (
    <section className='form-page'>
      <Container>
        <Row>
          <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-5'  onSubmit={handleSubmit}>
            <h1>Leave a Review!</h1>
            <label htmlFor="name">Username</label>
            <input type='text' className='input' name="name" placeholder='Username' value={formData.name} onChange={handleChange}/>
            {errors.name ? <p className='text-danger'>{errors.name}</p> : '' }
            <label htmlFor="text">Comments</label>
            <textarea className='input' name="text" placeholder='Comments' value={formData.text} onChange={handleChange}/>
            {errors.text ? <p className='text-danger'>{errors.text}</p> : '' }
            <div className="form">
              <label htmlFor="rating" >Rating</label>
              <Rating onClick={handleRating} emptyColor="#e4e5e9" fillColor="#ffc107" ratingValue={formData.rating} />
            </div>
        
            <button type='submit' className='btn w-100'>Submit</button>
          </form>
        </Row>
      </Container>
    </section>
  )
}

export default ReviewCity