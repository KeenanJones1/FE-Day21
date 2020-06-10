export default function manageHabits(state = {
 habits: [], loading: false}, action){
  switch(action.type){
    case 'ADD_HABIT': 
    return {

    }

    case 'FETCH_HABITS': 
     return {

     }
    
    case 'COMPLETE_HABIT':
     return{

     }

     case 'DELETE_HABIT':
      return{ 

      }

   default: 
   return state;
  }
 }