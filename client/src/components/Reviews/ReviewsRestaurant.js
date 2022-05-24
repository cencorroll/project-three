import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { userIsAuthenticated } from '../helpers/auth'
import { Rating } from 'react-simple-star-rating'
import { FaStar } from 'react-icons/fa'
// import { Rating } from 'react-simple-star-rating'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import { startSession } from 'mongoose'


const NewReview = () => { 
  const { id, restaurantId } = useParams()
  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    text: '',
    rating: Number,
    image: '',
  })

  const [ rating, setRating ] = useState(null)
  const [ hover, setHover ] = useState(null)

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
      await axios.post(`/api/cities/${id}/restaurants/${restaurantId}/review`, formData, { 
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}`, 
        },
      })
      navigate(`/cities/${id}/restaurants/${restaurantId}`)

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
            <div>
              {[ ...Array(5)].map((star, i)=>{
                const ratingValue = i + 1
                return (
                  <label htmlFor='rating' key={i}>
                    <input type='radio' name='rating' value={ratingValue} 
                      onClick={() => setRating(ratingValue)} 
                    />
                    <FaStar className='star' color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' } 
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      size={ 30 }
                    />
                  </label>
                )
              })}
            </div>
        
            <button type='submit' className='btn w-100'>Submit</button>
          </form>
        </Row>
      </Container>
    </section>
  )

}

export default NewReview