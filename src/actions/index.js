import * as Constants from '../helpers/constants'

export const addUser = data => ({
  type: Constants.addUser,
  data
})

export const removeUser = id => ({
  type: Constants.removeUser,
  id
})





