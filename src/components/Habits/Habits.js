import React from 'react'
import Habit from './Habit'


// MUI STUFF
import { Grid } from '@material-ui/core'
import {withStyles} from '@material-ui/styles'



class Habits extends React.Component{


 render(){
  const { habits } = this.props


  const Habits = habits.map(
   habit => {
    return(
     <Grid container component={Habit} 
      key={habit.id}
      habit={habit}
     />
    )
   }
  )


  return(
   <Grid container alignItems='stretch'>
    <h1>Your Habits</h1> 
    {Habits}
   </Grid>
  )
 }
}


export default Habits;