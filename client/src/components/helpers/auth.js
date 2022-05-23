export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('cities-app')
}

// taking the token, splitting it up and returning the payload thats encoded
const getPayload = () => {
  const token = getTokenFromLocalStorage()
  if (!token) return
  const payload = token.split('.')[1]
  return JSON.parse(atob(payload))
}

// checking to see if user is authenticated
export const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const currentTime = Math.floor(Date.now() / 1000)
  return currentTime < payload.exp
}

// checking that user id from payload matches review user id
export const userIsOwner = (singleReview) => {
  const payload = getPayload()
  if (!payload) return
  return singleReview.addedBy._id === payload.sub
}