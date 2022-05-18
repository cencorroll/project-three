import User from '../models/users.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

//post, /register

export const userRegister = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }

}

//post, /login

export const userLogin = async (req, res) => {

  try {
    const { email, password } = req.body
    const userToLogin = await User.findOne({ email: email })
    if (!userToLogin || !userToLogin.validatePassword(password)) throw new Error()
    const token = jwt.sign({ sub: userToLogin._id }, process.env.secret, { expiresIn: '5h' })
    console.log('token ->', token)

    return res.status(200).json({ message: `Welcome back ${userToLogin.username}`, token: token })

  } catch (error) {
    return res.status(422).json({ message: 'unauthorised' })
  }
}