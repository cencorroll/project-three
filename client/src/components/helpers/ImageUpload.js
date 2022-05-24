import React from 'react'
// import 'dotenv/config'
import axios from 'axios'

// const ImageUpload = ({ value, name, handleImageUrl }) => { 
const ImageUpload = ({ formData, setFormData }) => { 
  const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
  const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

  console.log(uploadURL, preset)

  // const handleChange = async e => { 
  //   const formData = new FormData()
  //   formData.append('file', e.target.files[0])
  //   formData.append('upload_preset', preset)
  //   const { data }  = await axios.post(uploadURL, formData)
  //   handleImageUrl(data.url)
  // }
  const handleImageUpload = async e => { 
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', preset)
    const res = await axios.post(uploadURL, data)
    setFormData({ ...formData, profileImage: res.data.url })
  }

  return (
    <>
      { FormData.reviewImage ? 
        <div>
          <img src={formData.reviewImage} alt='Image to upload' />
        </div>
        :
        <>
          <label htmlFor ='reviewImage' className="checkbox labl">Review Image Upload</label>
          <input
            name='reviewImage'
            className="input"
            type="file"
            onChange={handleImageUpload}
          />
        </>
      }
    </>
    // <>
    //   <label htmlFor="image">Upload Image</label>
    //   <input type="file" name={name} id="image" className="input" onChange={handleChange}/>
    // </>
  )
}
export default ImageUpload

