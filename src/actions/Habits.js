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
  let token = localStorage.getItem('token')

  let reqObj = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
  }

  return (dispatch) => {
    fetch( `http://localhost:3000/habits/${id}`, reqObj)
    .then(resp => resp.json())
    .then(habits => dispatch({type: 'SET_HABITS', habits}))
  }
}

export const editHabit = (state, id) => {
  let token = localStorage.getItem('token')
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