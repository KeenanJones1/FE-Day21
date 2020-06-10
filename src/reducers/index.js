import manageUsers from './manageUsers'
import manageHabits from './manageHabits'
import manageDallies from './manageDallies'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  users: manageUsers,
  habits: manageHabits,
  daily: manageDallies
})

export default rootReducer;