const token = localStorage.getItem('token')
const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}

export const addHabits = (state, id) => {
let reqObj = {
  method: 'POST', 
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({habit: state})
}
return (dispatch) => {
  fetch('http://localhost:3000/habits',reqObj)
  .then(resp => resp.json())
  .then(habit => dispatch({type: 'ADD_HABIT', habit}))
  }
}

export const deleteHabits = (id) => {

  let reqObj = {
    method: 'DELETE',
    headers
  }

  return (dispatch) => {
    fetch( `http://localhost:3000/habits/${id}`, reqObj)
    .then(resp => resp.json())
    .then(habits => dispatch({type: 'SET_HABITS', habits}))
  }
}

export const editHabit = (state, id) => {
  let reqObj = {
    method: 'PATCH', 
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    body: JSON.stringify({habit: state})
  }

  return (dispatch) => {
    fetch(`http://localhost:3000/habits/${id}`, reqObj)
    .then(resp => resp.json())
    .then( habits => dispatch({type: 'SET_HABITS', habits}))
  }
}

export const moveHabit = (id) => {
  let reqObj = {
    method: 'POST', 
    headers: headers,
    body: JSON.stringify({habit_id: id})
  }
  return (dispatch) => {
    fetch(`http://localhost:3000/daily_habits`, reqObj)
    .then(resp => resp.json())
    // .then(dailyhabits => console.log(dailyhabits))
    .then(dailyhabits => dispatch({type: 'MOVE_HABITS', dailyhabits}))
  }

}