export const fetchUser = (state) => {
const token = localStorage.getItem('token')
let reqObj = {
  method: 'POST', 
  headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
  body: JSON.stringify(state)}

  return (dispatch) => { dispatch({type: 'FETCH_USER'});
    fetch('http://localhost:3000/auth',reqObj)
    .then( resp => resp.json() )
    .then(token => { token.error ? alert(`${token.error}`): dispatch({type: 'SIGN_IN', token})}
    // .then(data => {  (data.error) ? console.log(data.error) :  dispatch({type: 'GET_INFO', data})}
    )
  }
}

export const fetchInfo = () => {
  let token = localStorage.getItem('token')

  const reqObj = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}

  return (dispatch) => {
    fetch('http://localhost:3000/myuser', reqObj)
    .then(resp => resp.json())
    .then(data => {  (data.error) ? console.log(data.error) :  dispatch({type: 'GET_INFO', data})}
    )
  }
}


export const signOut = () => {
  return (dispatch) => {
    dispatch({type: 'SIGN_OUT'})
  }
}