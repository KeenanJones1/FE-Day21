import React from 'react'
import {connect} from 'react-redux'
import {fetchTags} from '../actions/Tags'
import TagInput from '../components/Tags/TagInput'
import Tags from '../components/Tags/Tags'

class TagsContainer extends React.Component{

 constructor(){
  super()

 }

componentDidMount(){
 this.props.fetchTags()

}

 // Tags Container needs an presentational component.

 // list of suggestions and decrease as they type.

 render(){
  return(
   <div>
    
    <TagInput tags={this.props.tags}/> 

    {/* <Tags/> */}

   </div>
  )
 }
}

const mapStateToProps = (state) => {
 return{
  tags: state.tags,
  userHabits: state.users.user.habits
 }

}


export default connect(mapStateToProps, { fetchTags })(TagsContainer)