import mongoose from 'mongoose'

export const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 150 },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

export const thingsToDoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 150 },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, unique: true },
  link: { type: String },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

export const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 150 },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, unique: true },
  link: { type: String },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

export const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 150 },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, unique: true },
  link: { type: String },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

export const shortHistorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 150 },
  image: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})



const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  thingsToDo: [thingsToDoSchema],
  restaurants: [restaurantSchema],
  hotels: [hotelSchema],
  shortHistory: [shortHistorySchema],
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

export default mongoose.model('City', citiesSchema)