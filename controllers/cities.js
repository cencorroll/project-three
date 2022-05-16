import City from '../models/citiesSchema.js'

export const welcomeMessage = async (req, res) => { 
  return res.status(200).json({ message: 'Welcome to EUROPE TOUR' })
}

export const getCities = async (req, res) => { 
  const city = await City.find()
  return res.status(200).json(city)
}