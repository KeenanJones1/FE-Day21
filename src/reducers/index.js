import manageUsers from './manageUsers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  users: manageUsers,
})

export default rootReducer;