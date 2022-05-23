import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Profile = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios.get('/api/profile')
        setUserData(data)
        
      } catch (error) {
        console.log(error)
      }
    }
    console.log(userData)
    getUserData()
  }, [])


  return (
    <h1>Profile coming soon!</h1>
  )
}

export default Profile