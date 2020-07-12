export const fetchUser = (state) => {
const token = localStorage.getItem('token')
let reqObj = {
  method: 'POST', 
  headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
  body: JSON.stringify(state)}

  return (dispatch) => { dispatch({type: 'FETCH_USER'});
    fetch('http://localhost:3000/auth',reqObj)
    .then( resp => resp.json() )
    .then(token => dispatch({type: 'SIGN_IN', token})
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
    .then(data => { if (data.error) { console.log(data.error)} else { return dispatch({type: 'GET_INFO', data})}}
    )
  }
}

// {if(data.error){alert(data.error)}
// else{
//     localStorage.setItem('token', data.token)
//     this.props.history.push('/home')
// }
// }

export const signOut = () => {
  return (dispatch) => {
    dispatch({type: 'SIGN_OUT'})
  }
}