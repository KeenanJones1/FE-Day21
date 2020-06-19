import React from 'react';
import {connect} from 'react-redux';

// MUI STUFF
import { Grid, TextField, Button, Select, Switch, MenuItem, FormControlLabel} from '@material-ui/core';


// Recieving all tags via props 

// Make sure no tags are repeated when trying to create a tag


class TagInput extends React.Component{

constructor(){
 super()

 this.state = {
  // fetch all of the tags here execept for the ones already on the habit. 
  allTags: [],
  filteredTags: [],
  tagTitle: ''
 
 }
}

static getDerivedStateFromProps(props, state){
 return {
  allTags: props.tags.tags
 }
}

 

handleInput = (event) => {
 
 // fliter down filteredTags.
 this.setState({
  tagTitle: event.target.value
 })

}





handleKeyPressed = (event) => {
 
 if (event.key === 'Enter'){
  console.log(event.key)
  // send fetch to create a new habit_tag. 
  // Make sure that tag does not exist. 
 }
}








 render(){
  console.log(this.state)
  return(
   <Grid>
    <TextField 
    onChange ={(event)=> this.handleInput(event)}
    onKeyPress={(event) => this.handleKeyPressed(event)}
    placeholder="Tag Habit" 
     value={this.state.tagTitle}/>
   </Grid>
  )
 }
};


const mapStateToProps = () => {
 return {

 }
}

export default connect(mapStateToProps)(TagInput);