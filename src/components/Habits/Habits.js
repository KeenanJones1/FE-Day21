import React from 'react'
import Habit from './Habit'


// MUI STUFF
import { Grid } from '@material-ui/core'
import {withStyles} from '@material-ui/styles'

const styles = theme => ({
 container: {

 },

 title: {

 },

 input: {

 },

 habits: {
 height: 10,
 }

})



class Habits extends React.Component{


 render(){
  const { habits, classes } = this.props


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
   <Grid container id="habits" > 
    <h1>Your Habits</h1> 
    {Habits}
   </Grid>
  )
 }
}


export default withStyles(styles)(Habits);