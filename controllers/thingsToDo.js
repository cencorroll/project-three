import City from '../models/citiesSchema.js'

export const addThingsToDo = async (req, res) => { 
  const { id } = req.params
  try {
    const addFun = await City.findById(id)
    if (!addFun) throw new Error('City Not Found :(')
    const funWithOwner = { ...req.body, owner: req.verifiedUser._id }
    addFun.thingsToDo.push(funWithOwner)
    addFun.save()
    return res.status(200).json(funWithOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error.name)
  }
}

export const deleteThingsToDo = async (req, res) => { 
  const { id, funId } = req.params
  try {
    const city = await City.findById(id)
    if (!city) throw new Error('City Not Found')
    const deleteFun = city.thingsToDo.id(funId)
    if (!deleteFun) throw new Error('Not Found')
    if (!deleteFun.owner.equals(req.verifiedUser._id)) throw new Error('Not Authorised :( ')
    await deleteFun.remove()
    await city.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised:( ' })
  }
}