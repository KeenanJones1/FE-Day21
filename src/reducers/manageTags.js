export default function manageTags(state = {tags: []}, action){

 switch(action.type){

  case 'GET_TAGS': 
  
  return{
   // make fetch request and set all tags to state
   ...state, tags: action.tags
   
  }


  case 'CREATE_TAGS': 
  return{
   // post fetch request make sure habit_tags doesn't already have this tag.
  }


  case 'ADD_TAG': 
  return{
   // attach tag to the habit. 
  }

  case 'REMOVE_TAG': 
  return{
    // remove tag from the habit delete habit_tag from data. 
  }

  default: return state;
 }
}