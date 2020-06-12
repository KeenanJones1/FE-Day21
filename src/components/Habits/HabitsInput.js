import React from 'react';
import {connect} from 'react-redux'

// MUI STUFF
import { Grid, TextField, Button, Select, Switch, MenuItem, FormControlLabel} from '@material-ui/core'


class HabitsInput extends React.Component{
 state = {
   title: '',
   difficulty: '',
   note: '',
   type: 'Bad',
 }


 handleSwitch = () => {
  if (this.state.type === 'Bad'){
   this.setState({
    type: 'Good'
   })
  }

  else{
   this.setState({
    type: 'Bad'
   })
  }
 }

 handleNote = (event) => {
  this.setState({
   note: event.target.value
  })
 }

handleTitle = (event) => {
 this.setState({
  title: event.target.value
 })
}

handleSelect = (event) => {
 this.setState({
  difficulty: event.target.value
 })
}

 render(){
  return(
   <Grid container direction='column' justify='space-between' spacing={8} alignItems='center'>
     <h1>
      Create New Habit 
     </h1>
     <TextField required name="title" 
     color="secondary"
     label="Title" onChange={(event) => this.handleTitle(event)}/>

     <TextField 
      onChange={(event) => this.handleNote(event)}
      name="note"
      label="Notes"
      multiline
      rows={4}
      value={this.state.note}
      color="secondary"
     />

     <FormControlLabel control={<Switch onChange={this.handleSwitch}/>} label={this.state.type}>
     </FormControlLabel>
      
      
     
     <Select label="Difficulty" 
     onChange={(event) => this.handleSelect(event)}>
       <MenuItem name={1} value={1}>Level 1</MenuItem>
       <MenuItem name={2} value={2}>Level 2</MenuItem>
       <MenuItem name={3} value={3}>Level 3</MenuItem>
       <MenuItem name={4} value={4}>Level 4</MenuItem>
       <MenuItem name={5} value={5}>Level 5</MenuItem>
     </Select>
    
     <Button variant="contained" color='primary' >
        Submit
    </Button>
   </Grid>
  )
 }
};


export default connect()(HabitsInput);