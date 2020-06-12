import React from 'react'
import TagsContainer from '../../containers/TagsContainer'



// MUI STUFF
import { Paper, Typography, Checkbox, FormControlLabel  } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'





const styles = theme => ({
 paper: {
  backgroundColor: theme.palette.secondary.light
 }

 // title = {

 // },


})

class Habit extends React.Component{





 render(){
  const { habit, classes } = this.props
  return(
   <Paper className={classes.paper}>
     <FormControlLabel
        control={<Checkbox color="secondary" name="completed" />}
        label="Completed ?"
      />


    <Typography variant='subtitle1' >
     {habit.title}
    </Typography>
    
    <Typography variant='subtitle1' >
     {habit.note}
    </Typography>

    {/* <Typography variant='subtitle1' >
     {habit.streak}
    </Typography> */}

    <Typography variant='subtitle1' >
     Level {habit.difficulty} difficulty
    </Typography>


    <Typography variant='subtitle1' >
     {habit.type}
    </Typography>
 
    <TagsContainer />
   </Paper>
  )
 }
}



export default withStyles(styles)(Habit);