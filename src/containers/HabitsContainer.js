import React from 'react'
import Habits from '../components/Habits/Habits.js'
import HabitInput from '../components/Habits/HabitsInput.js'

// MUI STUFF
import {Grid} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'



const styles = theme => ({
  container: {

  },

  title: {

  },

  input: {

  },

  habits: {
  
  }



  

})


class HabitsContainer extends React.Component{
  
 render(){
  console.log("Habits", this.props)

  const { classes } = this.props
  return(

   <div>
    <Grid container spacing={9}>
     <Grid item xs={12} className={classes.input}>
      <HabitInput />
     </Grid>
    
     <Grid item xs={6} className={classes.habits}>
      <Habits habits={this.props.habits}/>
     </Grid>
    </Grid>
   </div>
  )
 }
}

export default withStyles(styles)(HabitsContainer)