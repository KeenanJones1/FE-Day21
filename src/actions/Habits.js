const token = localStorage.getItem('token')
const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}

export const addHabits = (state) => {
let reqObj = {
  method: 'POST', 
  headers: headers,
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
    headers: headers
  }
  return (dispatch) => {
    fetch( `http://localhost:3000/habits/${id}`, reqObj)
    .then(resp => resp.json())
    .then(habits => dispatch({type: 'SET_HABITS', habits}))
    .catch(data => alert(data.message))
    // .then(data => console.log(data))
  }
}

export const editHabit = (state, id) => {
  let reqObj = {
    method: 'PATCH', 
    headers: headers,
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
    // .then(data => console.log("fetch", data))
    .then(dailyhabits => dispatch({type: 'MOVE_HABITS', dailyhabits}))
  }

}