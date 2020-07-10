import React from 'react'
import Habits from '../components/Habits/Habits.js'
import HabitInput from '../components/Habits/HabitsInput.js'

// MUI STUFF
import {Grid} from '@material-ui/core'





class HabitsContainer extends React.Component{
  
 render(){

  return(

   <div>
    <Grid container spacing={9}>
     <Grid item xs={12} >
      <HabitInput />
     </Grid>
    
     <Grid item xs={6} >
      <Habits habits={this.props.habits}/>
     </Grid>
    </Grid>
   </div>
  )
 }
}

export default HabitsContainer