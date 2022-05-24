
import axios from 'axios'

const ImageUpload = ({ formData, setFormData }) => { 

  const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
  const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

  console.log(uploadURL, preset)

  const handleImageUpload = async e => { 
    // Create form data to send in the API request to cloudinary
    // To do it we're going to use the FormData constructor from javascript
    const data = new FormData()
    // Once created we're going to append the files that were uploaded to the FormData
    data.append('file', e.target.files[0])
    data.append('upload_preset', preset)
    // Once we.ve done this, this data is ready to be sent, and we'll use the upload url to do it
    const res = await axios.post(uploadURL, data)

    // Set the profileImage (from the formData on App.js) url to state
    setFormData({ ...formData, image: res.data.url })
  }

  return (
    <>
      { FormData.profileImage ? 
        <div>
          <img src={formData.image} alt='Image to upload' />
        </div>
        :
        <>
          <label htmlFor ='image' className="checkbox labl">Profile Image Upload</label>
          <input
            name='image'
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