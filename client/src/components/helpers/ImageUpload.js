import React from 'react'
import axios from 'axios'


const ImageUpload = ({ formData, setFormData }) => { 
  const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
  const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

  console.log(uploadURL, preset)

  const handleImageUpload = async e => { 
    const data = new formData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', preset)
    const res = await axios.post(uploadURL, data)
    setFormData({ ...formData, profileImage: res.data.url })
  }

  return (
    <>
      { formData.reviewImage ? 
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
  )
}
export default ImageUpload

