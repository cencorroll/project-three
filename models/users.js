import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const userSchema = new mongoose.Schema({

  username: { type: String, required: true, unique: true, maxlength: 25 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { id: false })
// created virutal fields
userSchema.virtual('createdCities',{
  ref: 'City',
  localField: '_id',
  foreignField:'owner'
 })
// userSchema.virtual('createdFun',{
//   ref: 'thingsToDoSchema',
//   localField: '_id',
//   foreignField:'owner'
// })
// userSchema.virtual('createdRestaurants',{
//   ref: 'City',
//   localField: '_id',
//   foreignField:'owner'
// })
// userSchema.virtual('createdHotels',{
//   ref: 'City',
//   localField: '_id',
//   foreignField:'owner'
// })

userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    return json
  },
})

// virtual
userSchema
  .virtual('passwordConfirmation')
  .set(function (passConfirmValue){
    this._passwordConfirmation = passConfirmValue
  })

// preValidate
userSchema
  .pre('validate', function (next){

    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match password field')
    }
    next()
  })

// preSave
userSchema
  .pre('save', function (next){
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(13))
    }
    next()
  })


userSchema.methods.validatePassword = function (plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password)
}
userSchema.plugin(mongooseUniqueValidator)
export default mongoose.model('User', userSchema)