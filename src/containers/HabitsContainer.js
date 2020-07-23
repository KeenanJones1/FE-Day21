import React from 'react'
import Habits from '../components/Habits/Habits.js'
import HabitInput from '../components/Habits/HabitsInput.js';

// MUI STUFF
import {Grid, IconButton, Dialog, Typography, Tooltip} from '@material-ui/core';
import {AddCircle, Cancel} from '@material-ui/icons';





class HabitsContainer extends React.Component{
  constructor(){
   super()
   this.state={
    open: false,
   }
  }

  handleOpen = () => {
   this.setState({
    open: true
   })
  }

  handleClose = () => {
   this.setState({
    open: false
   })
  }


 render(){
  return(

   <div>
    <Grid container spacing={1} direction='column'>

     <Grid container item xs={12} sm={6} direction="row">
     <Typography variant="h3" id="habits-title"> Habits</Typography> 
      <Tooltip title="Create a Habit">
        <IconButton onClick={this.handleOpen} color="secondary" id="habit-button">
          <AddCircle/>
        </IconButton>
      </Tooltip>
     </Grid>

   

     
    <Dialog open={this.state.open} fullWidth id="habit-modal">
     <HabitInput handleClose={this.handleClose}/>
      <IconButton onClick={this.handleClose}>
        <Cancel/>
      </IconButton>
    </Dialog>

    
     <Grid item xs={6} >
      <Habits habits={this.props.habits}/>
     </Grid>
    </Grid>
   </div>
  )
 }
}

export default HabitsContainer