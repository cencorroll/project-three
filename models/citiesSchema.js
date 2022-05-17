import mongoose from 'mongoose'
// * sub documents/schema
//review
const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 150 },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true, 
})

//

const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true  },
  thingsToDo: { type: Array, required: true, unique: true },
  // restaurants: { type: Array, required: true, unique: true },
  // hotels: { type: Array, required: true, unique: true },
  // shortHistory: { type: Array, required: true, unique: true },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})


export default mongoose.model('City', citiesSchema)