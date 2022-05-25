import mongoose from 'mongoose'


const reviewSchema = new mongoose.Schema({
  text: { type: String, maxlength: 1000, required: true },
  name: { type: String },
  rating: { type: Number, min: 1, max: 100, required: true },
  image: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

export const thingsToDoSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 1500 },
  image: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String },
  link: { type: String },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 1500 },
  image: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String },
  link: { type: String },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 1500 },
  image: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String },
  link: { type: String },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const shortHistorySchema = new mongoose.Schema({
  // name: { type: String, required: true, unique: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 1500 },
  image: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})


const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  country: { type: String, required: true },
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
