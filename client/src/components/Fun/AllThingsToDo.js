import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const AllThingsToDo = () => {

  const { id } = useParams

  const [funList, setFunList] = useState([])

  //useEffects

  useEffect(() => {
    const getFunList = async () => {
      try {
        const { data } = await axios.get(`api/cities/${id}/fun`)
        setFunList(data)
        console.log('loging',data)
      } catch (error) {
        console.log(error)
      }
    }
    getFunList()
  }, [id])


  return (
    <h1>things to do</h1>

  )
}

export default AllThingsToDo