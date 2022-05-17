
import City from '../models/citiesSchema.js'
import citiesData from './data/citiesData.js'
import { mongoURL } from '../config/enviroments.js'
import mongoose from 'mongoose'


const seedDataBase = async () => { 
  try {
    await mongoose.connect(mongoURL)
    await mongoose.connection.db.dropDatabase()
    const cities = await City.create(citiesData)
    console.log(cities.length)
    await mongoose.connection.close()
  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
  }
}

seedDataBase()