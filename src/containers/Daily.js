import React from 'react'



// MUI STUFF
import withStyles from '@material-ui/styles/withStyles'
import { Card } from '@material-ui/core'


const styles = theme => ({
  container: {
   height: '80vh',
   backgroundColor: theme.palette.secondary.light,
   width: '40vw'
  }

})


class Daily extends React.Component {



 render() {
  const { classes } = this.props
  return ( 
   <div>
    <h1> Your Daily Habits  </h1>
    <Card className={classes.container}>
     
    </Card >
   </div>
  )
 }
}

export default withStyles(styles)(Daily)