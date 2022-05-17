import  { thingsToDoInBarcelona, thingsToDoInLondon, thingsToDoInParis } from './thingsToDo.js'
import { restaurantDataBarcelona, restaurantDataLondon, restaurantDataParis } from './restaurantData.js'
import { hotelsoInBarcelona, hotelsoInLondon, hotelsoInParis } from './hotelsData.js'

export default [
  {
    name: 'Paris',
    thingsToDo: thingsToDoInParis,
    restaurants: restaurantDataParis,
    hotels: hotelsoInParis,
  },
  {
    name: 'London',
    image: 'sss',
    thingsToDo: thingsToDoInLondon,
    restaurants: restaurantDataLondon,
    hotels: hotelsoInLondon,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Barcelona',
    image: 'sss',
    thingsToDo: thingsToDoInBarcelona,
    restaurants: restaurantDataBarcelona,
    hotels: hotelsoInBarcelona,
    // shortHistory: shortHistroyData,
  }
]