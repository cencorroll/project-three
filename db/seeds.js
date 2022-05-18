
import City from '../models/citiesSchema.js'
import citiesData from './data/citiesData.js'
import { mongoURL } from '../config/environments.js'
import mongoose from 'mongoose'
import userData from './data/userData.js'
import User from '../models/users.js'

const seedDataBase = async () => { 
  try {
    await mongoose.connect(mongoURL)
    await mongoose.connection.db.dropDatabase()
    const users = await User.create(userData)
    const citiesWithOwner = citiesData.map(city => { 
      return { ...city, owner: users[0]._id }
    })
    console.log('cities with owner ->', citiesWithOwner)

    citiesWithOwner.forEach( city => { 
      city.hotels.forEach(hotel => hotel.owner = users[0]._id )
      city.restaurants.forEach(restaurant => restaurant.owner = users[0]._id )
      city.thingsToDo.forEach(thingToDo => thingToDo.owner = users[0]._id )
    })
    
    const cities = await City.create(citiesWithOwner)
    console.log(cities.length)
    await mongoose.connection.close()
  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
  }
}

seedDataBase()