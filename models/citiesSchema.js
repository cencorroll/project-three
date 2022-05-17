import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 150 },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
})

const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  thingsToDo: { type: Array, required: true, unique: true },
  restaurants: { type: Array, required: true, unique: true },
  hotels: { type: Array, required: true, unique: true },
  shortHistory: { type: Array, required: true, unique: true },
  reviews: [reviewSchema],
})


export default mongoose.model('City', citiesSchema)