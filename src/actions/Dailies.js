const token = localStorage.getItem('token')



export const removeDaily = (id) => {
 const reqObj = {
  method: 'DELETE', 
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
  body: JSON.stringify({habit_id: id})
 }
 return (dispatch) => {
  fetch(`http://localhost:3000/remove_daily`, reqObj)
  .then(resp => resp.json())
  .then(dailyhabits => dispatch({type: 'MOVE_HABITS', dailyhabits}))
  // .then(data => console.log("remove daily", data))
  .catch(data => alert(data.message))
 }
}


export const completeDaily = (id, state) => {
 const reqObj = {
  method: 'PATCH', 
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
  body: JSON.stringify({habit_id: id, completed: state})
 }

 return (dispatch) => {
  fetch(`http://localhost:3000/update_daily`, reqObj)
  .then(resp => resp.json())
  .then(data => dispatch({type: 'GET_INFO', data}))
  .catch(data => alert(data.message))
 }
}
