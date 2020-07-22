import React from 'react'
import Dailies from '../components/Daily/Dailies'


// MUI STUFF
import withStyles from '@material-ui/styles/withStyles'
import { Paper, Grid} from '@material-ui/core'


// Figure out why map isnt working for props.daily.habits

const styles = theme => ({
  container: {
    maxHeight: '70vh',
    backgroundColor: theme.palette.secondary.light,
    width: '30vw',
    maxWidth: '60vw',
    marginBottom: '10vh',
  }

})


class DailyContainer extends React.Component {



 render() {
  const { classes } = this.props
  return ( 
   <div>
    <h1> Your Daily Habits  </h1>
    <Grid  className={classes.container} wrap id="daily-habits">
      <Dailies daily={this.props.daily} />
    </Grid >
   </div>
  )
 }
}

export default withStyles(styles)(DailyContainer)

// export default connect(null, {deleteHabits, editHabit, moveHabit})(withStyles(styles)(Habit));