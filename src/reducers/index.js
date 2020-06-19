import manageUsers from './manageUsers'
import manageHabits from './manageHabits'
import manageDallies from './manageDallies'
import manageTags from './manageTags'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  users: manageUsers,
  habits: manageHabits,
  daily: manageDallies,
  tags: manageTags
})

export default rootReducer;