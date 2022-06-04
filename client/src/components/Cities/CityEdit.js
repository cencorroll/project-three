import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { useNavigate, useParams } from 'react-router-dom'

import { getTokenFromLocalStorage, userIsOwner } from '../helpers/auth'


const CityEdit = () => { 

  const navigate = useNavigate() 
  const { id } = useParams()

  const [ city, setCity ] = useState(null)
  const [ formData, setFormData ] = useState({
    name: '',
    image: '',
    country: '',
  })

  const [ errors, setErrors ] = useState({})

  useEffect(() => { 
    const getCity = async () => { 
      try {
        const { data } = await axios.get(`/api/cities/${id}`)
        setCity(data)
        setFormData(data)
      } catch (error) {
        setErrors(error)
      }
    }
    getCity()
  }, [id])

  useEffect(() => { 
    if (!city) {
      !userIsOwner(city) && navigate(`/api/cities/${city._id}`)
    }
  }, [city, navigate])

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.taget.name]: e.taget.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault() 
    try {
      const { data } = await axios.put(`/api/cities/${id}`, formData, {
        headers: { 
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate(`/api/cities/${id}`)
    } catch (error) {
      console.log(error)
    }

    return (
      <section className='form-page'>
        <Container>
          <Row>
            <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-5'  onSubmit={handleSubmit}>
              <h1>Edit City</h1>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder='name' className='input' value={formData.name} onChange={handleChange}/>
              {errors.name ? <p className='text-danger'>{errors.name}</p> : '' }
              <label htmlFor='country'>Country</label>
              <input type='text' name='country' placeholder='country'className='input' value={formData.country} onChange={handleChange}/>
              {errors.country ? <p className='text-danger'>{errors.country}</p> : ''}
              <label htmlFor='image'>Picture</label>
              <input type='text' name='image' placeholder='Picture' className='input' value={formData.image} onChange={handleChange}/>
              {errors.image && <p className='text-danger'>{errors.image}</p>}
              <button type='submit' className='btn btn-dark w-100'>Re-Build!</button>
            </form>
          </Row>
        </Container>
      </section>
    )
  }
}

export default CityEdit