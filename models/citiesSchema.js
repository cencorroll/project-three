import mongoose from 'mongoose'

// const thingsToDo = new mongoose.Schema({
//   name: { type: String, required: true }, 
//   description: { type: String, required: true }, 
//   picture: { type: String, required: true },
// })

const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  // image: { type: String, required: true, unique: true },
  thingsToDo: { type: Array, required: true, unique: true },
  // restaurants: { type: String, required: true, unique: true },
  // hotels: { type: String, required: true, unique: true },
  // shortHistory: { type: String, required: true, unique: true },
  // reviews: [],
})

export default mongoose.model('City', citiesSchema)