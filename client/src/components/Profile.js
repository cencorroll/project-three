import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card'

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
    <Card>
      <p>Profile coming soon!</p>
      <br />


    </Card>
  )
}

export default Profile