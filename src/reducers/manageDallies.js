export default function manageUsers(state = {
 daily: [], loading: false }, action){
  switch(action.type){
    case 'CREATE_DALLY': 
     return{

     }

     case 'FETCH_DALLIES': 
     return{

     }

     case 'COMPLETE_DALLIES': 
     return{

     }

     case 'REMOVE_HABIT': 
      return{
       
      }


   default: 
   return state;
  }
 }