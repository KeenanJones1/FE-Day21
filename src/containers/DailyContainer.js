import React from 'react'
import Dailies from '../components/Daily/Dailies'


// MUI STUFF
import withStyles from '@material-ui/styles/withStyles'
import { Grid, Typography} from '@material-ui/core'


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
  console.log("DH", this.props)
  return ( 
    <div>
      <Typography variant="h2"> Daily Habits </Typography>
      <Grid className={classes.container} id="daily-habits">
        <Dailies daily={this.props.daily} />
      </Grid >
    </div>
    )
  }
}

export default withStyles(styles)(DailyContainer)

// export default connect(null, {deleteHabits, editHabit, moveHabit})(withStyles(styles)(Habit));