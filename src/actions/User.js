export const fetchUser = (state) => {
 // console.log(state)
 let reqObj = {
  method: 'POST', 
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(state)
 }

  return (dispatch) => {
   dispatch({type: 'FETCH_USER'});
    fetch('http://localhost:3000/auth',reqObj)
    .then( resp => resp.json() )
    .then(token => 
     dispatch({type: 'SIGN_IN', token})
     // console.log(token)
    )
  }
}

export const fetchInfo = () => {
  let token = localStorage.getItem('token')

  const reqObj = {
    method: 'GET',
    headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
              }
}

  return (dispatch) => {
    fetch('http://localhost:3000/myuser', reqObj)
    .then(resp => resp.json())
    .then(data => 
      dispatch({type: 'GET_INFO', data})
    )
  }

}