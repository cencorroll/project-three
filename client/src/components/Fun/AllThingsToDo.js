import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'


import axios from 'axios'

// import bootstrap components


const AllThingsToDo = () => {

  const { id } = useParams

  const [funList, setFunList] = useState([])

  //useEffects

  useEffect(() => {
    const getFunList = async () => {
      try {
        const { data } = await axios.get(`/api/cities/${id}/fun/`)
        console.log(data)
        setFunList(data)
        console.log('loging', data)
      } catch (error) {
        console.log(error)
      }
    }
    getFunList()
  }, [id])


  return (
    <>
      {funList.map(fun => {
        const { _id, name, description, image, price, reviews } = fun
        return (
          <div key={_id} className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <h1 className="header"> {name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{reviews}</p>
          </div>
        )
      })}

    </>
  )
}

export default AllThingsToDo