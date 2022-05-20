import  { thingsToDoInBarcelona, thingsToDoInLondon, thingsToDoInParis, thingsToDoInLisbon, thingsToDoInAmsterdam, thingsToDoInIstanbul, thingsToDoInPorto, thingsToDoInSeville, thingsToDoInAberdeen, thingsToDoInEdinburgh, thingsToDoInGlasgow } from './thingsToDo.js'
import { restaurantDataBarcelona, restaurantDataLondon, restaurantDataParis, restaurantDataLisbon, restaurantDataIstanbul, restaurantDataPorto, restaurantDataSeville, restaurantDataAmsterdam, restaurantDataAberdeen, restaurantDataEdinburgh, restaurantDataGlasgow } from './restaurantData.js'
import { hotelsoInBarcelona, hotelsoInLondon, hotelsoInParis, hotelsoInLisbon, hotelsoInIstanbul, hotelsoInPorto, hotelsoInSeville, hotelsoInAmsterdam, hotelsoInAberdeen, hotelsoInEdinburgh, hotelsoInGlasgow } from './hotelsData.js'

export default [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873',
    thingsToDo: thingsToDoInParis,
    restaurants: restaurantDataParis,
    hotels: hotelsoInParis,
  },

  {
    name: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
    thingsToDo: thingsToDoInLondon,
    restaurants: restaurantDataLondon ,
    hotels: hotelsoInLondon,
    // shortHistory: shortHistroyData,
  },
  
  {
    name: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1587789202069-f57c846b85db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871',
    thingsToDo: thingsToDoInBarcelona,
    restaurants: restaurantDataBarcelona ,
    hotels: hotelsoInBarcelona,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Istanbul',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
    thingsToDo: thingsToDoInIstanbul,
    restaurants: restaurantDataIstanbul,
    hotels: hotelsoInIstanbul,
  },
  {
    name: 'Lisbon',
    image: 'https://www.expatica.com/app/uploads/sites/8/2017/05/lisbon-1920x1080.jpg',
    thingsToDo: thingsToDoInLisbon,
    restaurants: restaurantDataLisbon,
    hotels: hotelsoInLisbon,
  },
  {
    name: 'Porto',
    image: 'https://touristjourney.com/wp-content/uploads/2020/10/shutterstock_1706807566-scaled.jpg',
    thingsToDo: thingsToDoInPorto,
    restaurants: restaurantDataPorto,
    hotels: hotelsoInPorto,
  },
  {
    name: 'Seville',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/31/16/seville.jpg?quality=75&width=1200&auto=webp',
    thingsToDo: thingsToDoInSeville,
    restaurants: restaurantDataSeville,
    hotels: hotelsoInSeville,
  },
  {
    name: 'Amsterdam',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/08/12/amsterdam-gabled-houses.jpg?quality=75&width=982&height=726&auto=webp',
    thingsToDo: thingsToDoInAmsterdam,
    restaurants: restaurantDataAmsterdam,
    hotels: hotelsoInAmsterdam,
  },
  //? scottish cities
  {
    name: 'Edinburgh',
    image: 'https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
    thingsToDo: thingsToDoInEdinburgh,
    restaurants: restaurantDataEdinburgh,
    hotels: hotelsoInEdinburgh,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Aberdeen',
    image: 'https://images.unsplash.com/photo-1566222390510-514b1bb349b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867',
    thingsToDo: thingsToDoInAberdeen,
    restaurants: restaurantDataAberdeen,
    hotels: hotelsoInAberdeen,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Glasgow',
    image: 'https://images.unsplash.com/photo-1628874669577-7dd97c06517e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
    thingsToDo: thingsToDoInGlasgow,
    restaurants: restaurantDataGlasgow,
    hotels: hotelsoInGlasgow,
    // shortHistory: shortHistroyData,
  }

]