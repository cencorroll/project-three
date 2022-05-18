import User from '../models/users.js'

//get
//endpoint: /profile/userId

export const getProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.verifiedUser._id).populate('createdCities')
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}