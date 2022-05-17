import  { thingsToDoInBarcelona, thingsToDoInLondon, thingsToDoInParis, thingsToDoInEdinburgh, thingsToDoInAberdeen, thingsToDoInGlasgow } from './thingsToDo.js'
import { restaurantDataBarcelona, restaurantDataLondon, restaurantDataParis } from './restaurantData.js'
import { hotelsoInBarcelona, hotelsoInLondon, hotelsoInParis } from './hotelsData.js'

export default [
  {
    name: 'Paris',
    image: 'sss',
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
  },
  
  //? scottish cities
  {
    name: 'Edinburgh',
    image: 'edin',
    thingsToDo: thingsToDoInEdinburgh,
    restaurants: restaurantDataEdinburgh,
    hotels: hotelsoInEdinburgh,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Aberdeen',
    image: 'aberdeen',
    thingsToDo: thingsToDoInAberdeen,
    restaurants: restaurantDataAberdeen,
    hotels: hotelsoInAberdeen,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Glasgow',
    image: 'glasgow',
    thingsToDo: thingsToDoInGlasgow,
    restaurants: restaurantDataGlasgow,
    hotels: hotelsoInGlasgow,
    // shortHistory: shortHistroyData,
  }

]