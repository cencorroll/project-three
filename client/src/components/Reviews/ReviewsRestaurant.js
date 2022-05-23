import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

const NewReview = () => { 
  const { id, restaurantId } = useParams()
  // const history = useHistory()

  const [ formData, setFormData ] = useState({
    text: '',
    description: '',
    rating: 5,
  })

  const [ errors, setErrors ] = useState({ text: { message: '' } })

  const handleRating = (rating) => { 
    setFormData({ ...formData, rating })
  }

  const handleChange = event => { 
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setFormData({ ...formData, [event.target.name]: value })
    setErrors({ ...errors, [event.target.name]: '' })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault()
    try {
      await axios.post(`api/cities/${id}/restaurants/${restaurantId}/review`, formData, { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` } } )
      // history.push(`api/cities/${id}/restaurants/${restaurantId}`)
    } catch (error) {
      if (error.response.data.errors) setErrors(error.response.data.errors)
    }
  }

  return (
    <div className="signUpPage page">

      <div className="form-header sign-up-form-header">
        <h2>Add review</h2>

      </div>

      <div className="form-container sign-up-form-container">

        <form onSubmit={handleSubmit}>

          <div className="formfield">
            <label htmlFor="review" >Review</label>
            <textarea onInput={handleChange} name="text" id="review" type="text" placeholder="enter review here" maxLength='400' value={formData.text} />
            {errors.text && <p className="error">{errors.text.message}</p>}
          </div>


          <button className="form-button">Submit</button>

        </form>
      </div>

    </div>
  )

}

export default NewReview