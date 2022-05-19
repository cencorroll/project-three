import City from '../models/citiesSchema.js'
import { thingsToDoSchema } from '../models/citiesSchema.js'

// REVIEWS
export const addReviewCities = async (req, res) => { 
  const { id } = req.params
  try {
    // const review = await City.findOne(City.forEach(city => { 
    //   city.thingsToDo.forEach(fun => fun.reviews = req.body )
    // }))
    const review = await City.findById(id)
    if (!review) throw new Error('City Not Found')
    const reviewOwner = { ...req.body, owner: req.verifiedUser._id }
    review.reviews.push(reviewOwner)
    review.save()
    return res.status(200).json(reviewOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

export const addReviewFun = async (req, res) => { 
  const { id } = req.params
  try {
    console.log('THings TO Do ->>>>>',thingsToDoSchema)
    const review = await City.findById(id)
    if (!review) throw new Error('City Not Found')
    const reviewOwner = { ...req.body, owner: req.verifiedUser._id }
    review.reviews.push(reviewOwner)
    review.save()
    return res.status(200).json(reviewOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

// export const deleteReviewFun = async (req, res) => { 
//   const { id, reviewId } = req.params
//   try {
//     const review = await thingsToDoSchema.findById(id)
//     if (!review) throw new Error('Not Found !')
//     const reviewDelete = review.reviews.id(reviewId)
//     if (!reviewDelete) throw new Error()
//     if (!reviewDelete.owner.equals(req.verifiedUser._id)) throw new Error('Unauthorised !')
//     reviewDelete.remove()
//     review.save()
//     return res.sendStatus(204)
//   } catch (error) {
//     console.log(error)
//     return res.status(401).json({ message: 'Unauthorised:( ' })
//   }
// }


export const deleteReviewCities = async (req, res) => { 
  const { id, reviewId } = req.params
  try {
    const review = await City.findById(id)
    if (!review) throw new Error('Not Found !')
    const reviewDelete = review.reviews.id(reviewId)
    if (!reviewDelete) throw new Error()
    if (!reviewDelete.owner.equals(req.verifiedUser._id)) throw new Error('Unauthorised !')
    reviewDelete.remove()
    review.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised:( ' })
  }
}


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
    const restaurantOwner = { ...req.body, owner: req.verifiedUser._id }
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
    const hotelOwner = { ...req.body, owner: req.verifiedUser._id }
    hotel.hotels.push(hotelOwner)
    hotel.save()
    return res.status(200).json(hotelOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

export const deleteHotel = async (req, res) => { 
  const { id, hotelId } = req.params
  try {
    const hotel = await City.findById(id)
    if (!hotel) throw new Error('Not Found!')
    const deleteHotel = hotel.hotels.id(hotelId)
    if (!deleteHotel) throw new Error('Not Found!')
    if (!deleteHotel.owner.equals(req.verifiedUser._id)) throw new Error('Unauthorised :(')
    deleteHotel.remove()
    hotel.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised:( ' })
  }
}


// Short History 
export const addHistory = async (req, res) => { 
  const { id } = req.params
  try {
    const story = await City.findById(id)
    if (!story) throw new Error('City Not Found')
    const storyOwner = { ...req.body, owner: req.verifiedUser._id } 
    if (!storyOwner) throw new Error()
    story.shortHistory.push(storyOwner)
    story.save()
    return res.status(200).json(storyOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

export const deleteHistory = async (req, res) => { 
  const { id, storyId } = req.params
  try {
    const story = await City.findById(id)
    if (!story) throw new Error('Not Found!')
    const deleteStory = story.shortHistory.id(storyId)
    if (!deleteStory) throw new Error()
    if (!deleteStory.owner.equals(req.verifiedUser._id)) throw new Error( 'Unauthorised ! :(')
    deleteStory.remove()
    story.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised:( ' })
  }
}