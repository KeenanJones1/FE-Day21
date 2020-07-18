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
  console.log("Habits props", this.props)

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
   <Grid container id="habits" > 
    {Habits}
   </Grid>
  )
 }
}


export default withStyles(styles)(Habits);