import React from 'react'
import Dailies from '../components/Daily/Dallies'


// MUI STUFF
import withStyles from '@material-ui/styles/withStyles'
import { Card } from '@material-ui/core'


const styles = theme => ({
  container: {
   height: '60vh',
   backgroundColor: theme.palette.secondary.light,
   width: '30vw',
   marginBottom: '10vh',
  }

})


class Daily extends React.Component {



 render() {
  const { classes } = this.props
  return ( 
   <div>
    <h1> Your Daily Habits  </h1>
    <Card className={classes.container}>
     <Dailies daily={this.props.daily}/>
    </Card >
   </div>
  )
 }
}

export default withStyles(styles)(Daily)

// export default connect(null, {deleteHabits, editHabit, moveHabit})(withStyles(styles)(Habit));