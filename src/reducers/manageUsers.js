export default function manageUsers(state = {
  user: {email: "", password: "", id: "", admin: false, habits: [], daily: {}, token: ''}, loading: false}, action){
    switch(action.type){

    case 'SIGN_IN': 
      return {
      ...state, user: {...state.user, token: action.token.token}, loading: 'done'
      }

      case 'GET_INFO': 
      const { data } = action
        return{
          ...state, user: {...state.user, habits: data.habits, daily: data.daily, admin: data.admin, id: data.id}
        }

      case 'ADD_HABIT': 
      return{
        ...state, user: {...state.user, habits: [...state.user.habits, action.habit]}
      }


      case 'SET_HABITS':
      return{ 
        ...state, user: {...state.user, habits: action.habits.habits}
      }


    case 'CREATE_USER': 
      return{
        // post fetch to user and render a token and create a daily. push to home page
      }

    case 'SIGN_OUT': 
      return { 
      // Remove token from localstorage and push to signin page
      }

    default: 
    return state;
    }
  }
