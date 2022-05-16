import mongoose from 'mongoose'

const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },

})

export default mongoose.model('City', citiesSchema)