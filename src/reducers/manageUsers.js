export default function manageUsers(state = {
  user: {email: "", password: "", id: "", admin: false, habits: [], daily: {}, token: '', tags: []}, loading: false}, action){
    switch(action.type){

    case 'SIGN_IN': 
    console.log('signin', state.user);
    // this set loading to done, and set the token to the localStorage

      return {
      ...state, user: {...state.user, token: action.token.token}, loading: 'done'
      }

      case 'GET_INFO': 
      console.log('getting info', action.data)
      const { data } = action
        return{
          ...state, user: {...state.user, habits: data.habits, daily: data.daily, admin: data.admin, id: data.id, tags: data.tags}
        }


    case 'CREATE_USER': 
      return{

      }

    case 'SIGN_OUT': 
      return { 

      }

    default: 
    return state;
    }
  }
