import mongoose from 'mongoose'


const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 1000 },
  description: { type: String, required: true },
  rating: { type: String, required: true, 'default': 0, min: 0, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

// const reviewSchemaThingsToDo = new mongoose.Schema({
//   text: { type: String, required: true, maxlength: 1000 },
//   description: { type: String, required: true },
//   rating: { type: String, required: true, min: 1, max: 5 },
//   owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
// }, {
//   timestamps: true, 
// })


export const thingsToDoSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 1000 },
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
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 1000 },
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
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 1000 },
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
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 1000 },
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
