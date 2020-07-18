import React from 'react'
import Habit from '../Habits/Habit'
import { Grid } from '@material-ui/core'

class Dailies extends React.Component{
 render(){


  const { habits } = this.props.daily
  console.log("Dailies props", habits )
  const Habits = habits.map(
   habit => {
    return(
     <Grid container component={Habit} key={habit.id} habit={habit}/>
    )
   }
  )
  return(
   <Grid container >
    {Habits}
   </Grid>
  )
 }
}

export default Dailies
