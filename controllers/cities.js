import City from '../models/citiesSchema.js'

export const welcomeMessage = async (req, res) => { 
  return res.status(200).json({ message: 'Welcome to EUROPE TOUR' })
}

//? Get all cities
export const getCities = async (req, res) => { 
  const city = await City.find()
  console.log(`There are ${city.length} ciies inside this database!`)
  return res.status(200).json(city)
}

//? Get single city
export const getSingleCity = async (req, res) => {
  const { id } = req.params
  try {
    const requestedCity = await City.findById(id)
    if (!requestedCity) {
      return res.status(404).json({ message: 'City not found' })
    }
    return res.status(200).json(requestedCity)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: 'Something went wrong.' })
  }
}

//? Add a city
export const addCity = async (req, res) => {
  const { body: newCity } = req // add verified user to req
  try {
    const addedCity = await City.create(newCity) // add owner
    return res.status(200).json(addedCity)
  } catch (error) {
    console.log('Can\'t add this city')
    console.log(error)
    return res.status(400).json(error)
  }
}

//? Update a city
export const updateCity = async(req, res) => {
  const { id } = req.params
  const { body: editCity } = req // add verifiedUser to req
  try {
    const updatedCity = await City.findById(id)

    // if statement to check if owner is verified user goes here

    Object.assign(updatedCity, editCity)
    await updatedCity.save()

    if (!updatedCity) {
      return res.status(404).json({ message: 'City not found' })
    }
    return res.status(200).json(updatedCity)
  } catch (error) {
    console.log('Error ->', error)
    return res.status(404).json(error)
  }
}

//? Delete a city
export const deleteCity = async(req, res) => {
  const { id } = req.params
  try {
    const cityToDelete = await City.findById(id)
    // Add the check to see if verified user and owner are the same 
    if (!cityToDelete) {
      return res.status(404).json({ message: 'City not found' })
    }
    await cityToDelete.remove()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(404).json(error)
  }
}
