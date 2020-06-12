import React from 'react'
import Habit from './Habit'


// MUI STUFF
import { Grid } from '@material-ui/core'



class Habits extends React.Component{


 render(){

  console.log("HabitList", this.props.habits)
  const { habits } = this.props


  const HabitList = habits.map(
   habit => {
    return(
     <Habit 
      key={habit.id}
      habit={habit}
      // add/create tag dispatch here
     />
    )
   }
  )







 





  return(
   <Grid container >
    <h1>Your Habits</h1> 
    {HabitList}
   </Grid>
  )
 }
}


export default Habits;