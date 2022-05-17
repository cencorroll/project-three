import City from '../models/citiesSchema.js'

// THINGS TO DO 
export const addThingsToDo = async (req, res) => { 
  const { id } = req.params
  try {
    const addFun = await City.findById(id)
    if (!addFun) throw new Error('City Not Found :(')
    const funWithOwner = { ...req.body, owner: req.verifiedUser._id }
    addFun.thingsToDo.push(funWithOwner)
    addFun.save()
    return res.status(200).json(funWithOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

export const deleteThingsToDo = async (req, res) => { 
  const { id, funId } = req.params
  try {
    const city = await City.findById(id)
    if (!city) throw new Error('City Not Found')
    const deleteFun = city.thingsToDo.id(funId)
    if (!deleteFun) throw new Error('Not Found')
    if (!deleteFun.owner.equals(req.verifiedUser._id)) throw new Error('Not Authorised :( ')
    await deleteFun.remove()
    await city.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised:( ' })
  }
}


// RESTAURANTS 
export const addRestaurant = async (req, res) => { 
  const { id } = req.params
  try {
    const restaurant = await City.findById(id)
    if (!restaurant) throw new Error('City Not Found!')
    const restaurantOwner = { ...restaurant, owner: req.verifiedUser._id }
    restaurant.restaurants.push(restaurantOwner)
    restaurant.save()
    return res.status(200).json(restaurantOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

export const deleteRestaurant = async (req, res) => { 
  const { id, restaurantId } = req.params
  try {
    const restaurant = await City.findById(id)
    if (!restaurant) throw new Error('City Not Found!')
    const deleteRestaurant = restaurant.restaurants.id(restaurantId)
    if (!deleteRestaurant) throw new Error('Not Found')
    if (!deleteRestaurant.owner.equals(req.verifiedUser._id)) throw new Error('Not Authorised :( ')
    await deleteRestaurant.remove()
    await restaurant.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised:( ' })
  }
}


// HOTELS
export const addHotel = async (req, res) => { 
  const { id } = req.params
  try {
    const hotel = await City.findById(id)
    if (!hotel) throw new Error('City Not Found!')
    const hotelOwner = { ...hotel, owner: req.verifiedUser._id }
    hotel.hotels.push(hotelOwner)
    hotel.save()
    return res.status(200).json(hotelOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

// export const deleteHotel = async (req, res) => { 
//   const { id, hotelId } = req.params
//   try {
//     const hotel = await City.findById(id)
//     if (h)
//   } catch (error) {
    
//   }
// }