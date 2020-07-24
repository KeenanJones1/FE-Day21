import React from 'react'
import Daily from './Daily.js'
import { Grid } from '@material-ui/core'

class Dailies extends React.Component{
 render(){

  const { habits } = this.props.daily
  console.log("habits", this.props.daily.habits)
  const Habits = habits.map(
   habit => {
    return(
     <Grid container component={Daily} key={habit.id} habit={habit} />
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
