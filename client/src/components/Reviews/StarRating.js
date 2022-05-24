import React from 'react'
import { FaStar } from 'react-icons/fa'

const Stars = ({ rating }) => {
  const stars = ['⭐️',  '⭐️',  '⭐️',  '⭐️',  '⭐️'].map((star, index) => {
    if (index < Number(rating)) {
      return <span key={index}>{star}</span>
    }
  })
  return (
    <div className="stars">{stars}</div>
  )
}
export default Stars
