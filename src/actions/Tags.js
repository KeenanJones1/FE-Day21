export const fetchTags = () => {

  // type: 'hello'
  return (dispatch) => {
    dispatch({type: 'FETCH_TAGS'});
    fetch('http://localhost:3000/tags')
    .then(resp => resp.json())
    .then(tags => 
      dispatch({type: 'GET_TAGS', tags})
      )
    }
  }




