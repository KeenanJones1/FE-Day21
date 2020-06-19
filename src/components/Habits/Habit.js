import React from 'react'
import TagsContainer from '../../containers/TagsContainer'
import {deleteHabits} from '../../actions/Habits'
import {connect} from 'react-redux'


// MUI STUFF
import { Paper, Typography, Checkbox, FormControlLabel, IconButton} from '@material-ui/core'
import {Delete, Edit} from '@material-ui/icons'
import withStyles from '@material-ui/core/styles/withStyles'





const styles = theme => ({
 paper: {
  backgroundColor: theme.palette.secondary.light
 }

 


})

class Habit extends React.Component{

handleDelete = () => {
  this.props.deleteHabits(this.props.habit.id)
}



 render(){
  const { habit, classes } = this.props
  console.log(this.props.habit.id)
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

    <IconButton size="small" color="primary">
      <Delete onClick={this.handleDelete}/>
    </IconButton>

    {/* <IconButton size="small" color="primary">
      <Edit onClick={this.handleEdit}/>
    </IconButton> */}
 
    <TagsContainer />
   </Paper>
  )
 }
}

const mapStateToProps = () => {
  return{

  }
}

const mapDispatchToProps =() => {
  return{

  }
}

export default connect(mapStateToProps, {deleteHabits})(withStyles(styles)(Habit));
// connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));