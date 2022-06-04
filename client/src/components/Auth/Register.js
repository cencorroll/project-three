import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Register = () => {
  const navigate = useNavigate()
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [ errors, setErrors ] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formData)
      navigate('/login')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      console.log(error.response.data)
      setErrors(error.response.data)
    }

  }

  return (
    <section className="form-page">
      <Container>
        <Row>
          <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-5' onSubmit={handleSubmit}>
            <h1>Register</h1>
            {/* Username */}
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className='input' placeholder='Username' value={formData.username} onChange={handleChange} />
            {errors.username && <p className='text-danger'>{errors.username}</p>}
            {/* Email */}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className='input' placeholder='Email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email}</p>}
            {/* Password */}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className='input' placeholder='Password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password}</p>}
            {/* Password Confirmation */}
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input type="password" name="passwordConfirmation" className='input' placeholder='Password Confirmation' value={formData.passwordConfirmation} onChange={handleChange} />
            {errors.passwordConfirmation && <p className='text-danger'>{errors.passwordConfirmation}</p>}
            {/* Submit */}
            <button type="submit" className="btn w-100">Register</button>
          </form>
        </Row>
      </Container>
    </section>
  )
}

export default Register