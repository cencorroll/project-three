import City from '../models/citiesSchema.js'
import { thingsToDoSchema } from '../models/citiesSchema.js'

// REVIEWS
export const addReviewCities = async (req, res) => { 
  const { id } = req.params
  try {
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

export const getAllThingsToDo = async (req, res, next) => { 
  const { id } = req.params
  try {
    const city = await City.findOne( { id: id }).populate('thingsToDo')
    const thingsToDoList = city.thingsToDo
    res.status(200).json(thingsToDoList)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const getSingleThingsTodo = async (req, res) => { 
  const { id, funId } = req.params
  try {
    const city = await City.findById(id).populate('thingsToDo')
    console.log(city)
    if (!city) return res.status(404).json({ message: 'City Not Found' })
    const thingsTodo = await city.thingsToDo.find(thingsToDo => thingsToDo._id.toString() === funId )
    if (!thingsTodo) {
      return res.status(404).json({ message: 'Activity  not found' })
    }
    return res.status(200).json(thingsTodo)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: 'Something went wrong.' })
  }
}

export const addFunReview = async (req, res) => { 
  const { id, funId } = req.params
  try {
    const city = await City.findById(id).populate('thingsToDo').populate('reviews')
    if (!city) return res.status(404).json({ message: 'City Not Found' })
    const fun = await city.thingsToDo.find(fun => fun._id.toString() === funId)
    if (!fun) {
      return res.status(404).json({ message: 'Fun not found' })
    }
    const reviewWithOwner = { ...req.body, owner: req.verifiedUser._id }
    fun.reviews.push(reviewWithOwner)
    await city.save()
    return res.status(200).json(fun)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

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
export const getSingleRestaurant = async (req, res) => { 
  const { id, restaurantId } = req.params
  console.log('PARAMS ->>>>',req.params)
  try {
    const city = await City.findById(id).populate('restaurants')
    console.log(city)
    if (!city) return res.status(404).json({ message: 'City Not Found' })
    const restaurant = await city.restaurants.find(restaurant => restaurant._id.toString() === restaurantId )
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' })
    }
    return res.status(200).json(restaurant)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: 'Something went wrong.' })
  }
}

export const addRestaurantReview = async (req, res) => { 
  const { id, restaurantId } = req.params
  try {
    const city = await City.findById(id).populate('restaurants').populate('reviews')
    if (!city) return res.status(404).json({ message: 'City Not Found' })
    const restaurant = await city.restaurants.find(restaurant => restaurant._id.toString() === restaurantId)
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' })
    }
    console.log('RESTAURANT --->>>>', restaurant)
    // const review = await city.restaurants.reviews.find( review => review._id.toStrong() === reviewId)
    // const review = { ...restaurant, reviews: req.body }
    const reviewWithOwner = { ...req.body, owner: req.verifiedUser._id }
    console.log('RESTAURANT REVIEWS BEFORE PUSHING ->', restaurant.reviews)
    restaurant.reviews.push(reviewWithOwner)
    console.log('RESTAURANT REVIEWS ->', restaurant.reviews)
    await city.save()
    return res.status(200).json(restaurant)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}


export const getAllRestaurants = async (req, res, next) => { 
  const { id } = req.params
  try {
    const city = await City.findOne( { id: id }).populate('restaurants')
    const restaurantsList = city.restaurants
    res.status(200).json(restaurantsList)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

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
// get
//all
export const getAllHotels = async (req, res, next) => { 
  const { id } = req.params
  try {
    const city = await City.findOne( { id: id }).populate('hotels')
    const hotelsList = city.hotels
    console.log('RESTAURANT ->', hotelsList)
    res.status(200).json(hotelsList)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
//single
export const getSingleHotels = async (req, res) => { 
  const { id, hotelId } = req.params
  try {
    const city = await City.findById(id).populate('hotels')
    console.log(city)
    if (!city) return res.status(404).json({ message: 'City Not Found' })
    const hotels = await city.hotels.find(hotels => hotels._id.toString() === hotelId )
    if (!hotels) {
      return res.status(404).json({ message: 'Hotel not found' })
    }
    return res.status(200).json(hotels)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: 'Something went wrong.' })
  }
}

export const addHotelReview = async (req, res) => { 
  const { id, hotelId } = req.params
  try {
    const city = await City.findById(id).populate('hotels').populate('reviews')
    if (!city) return res.status(404).json({ message: 'City Not Found' })
    const hotel = await city.hotels.find(hotel => hotel._id.toString() === hotelId)
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' })
    }
    const reviewWithOwner = { ...req.body, owner: req.verifiedUser._id }
    console.log('RESTAURANT REVIEWS BEFORE PUSHING ->', hotel.reviews)
    hotel.reviews.push(reviewWithOwner)
    console.log('RESTAURANT REVIEWS ->', hotel.reviews)
    await city.save()
    return res.status(200).json(hotel)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

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

//get
export const getHistory = async (req, res, next) => { 
  const { id } = req.params
  try {
    const city = await City.findOne( { id: id }).populate('shortHistory')
    const history = city.shortHistory
    res.status(200).json(history)
  } catch (error) {
    console.log(error)
    next(error)
  }
}


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