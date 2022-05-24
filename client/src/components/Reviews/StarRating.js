import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ( { rating } ) => { 
  
  const [ ratings, setRatings ] = useState(null)
  const [ hover, setHover ] = useState(null)
  
  const stars = [ FaStar, FaStar, FaStar, FaStar, FaStar ].map((star, index) => {
    if (index < Number(rating)) {
      return <span key={index}>{star}</span>
    } else {
      return <span key={index} className='grey'>{star}</span>
    }
  })

  return (
    <div className='stars'>{stars}</div>
  )
}
// return (
//   <div>
//     {[ ...Array(5)].map((star, i)=>{
//       const ratingValue = i + 1
//       return (
//         <label key={i}>
//           <input type='radio' name='rating' value={ratingValue} 
//             onClick={() => setRatings(ratingValue)} 
//           />
//           <FaStar className='star' color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' } 
//             onMouseEnter={() => setHover(ratingValue)}
//             onMouseLeave={() => setHover(null)}
//             size={ 40 }
//           />
//         </label>
//       )
//     })}
//   </div>
// )