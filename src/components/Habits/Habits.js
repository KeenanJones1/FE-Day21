import React from 'react'
import Habit from './Habit'


// MUI STUFF
import { Grid } from '@material-ui/core'
import {withStyles} from '@material-ui/styles'



class Habits extends React.Component{


 render(){
  const { habits } = this.props


  const HabitList = habits.map(
   habit => {
    return(
     <Habit 
      key={habit.id}
      habit={habit}
     />
    )
   }
  )


  return(
   <Grid container justify="space-evenly" alignItems="center" >
    <h1>Your Habits</h1> 
    {HabitList}
   </Grid>
  )
 }
}


export default Habits;