import React from 'react'



// MUI STUFF
import withStyles from '@material-ui/core/styles/withStyles'
import { Paper } from '@material-ui/core'

const styles = theme => ({
 paper: {
  height: '30vh',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText
 }

})

class DashBoard extends React.Component{



 render(){
  
  const {classes} = this.props

  return(
   <Paper className={classes.paper}>
    DashBoard has the graphs and is conditionally rendered based on admin = true. if false have hill picture
   </Paper>
  )
 }
}





export default withStyles(styles)(DashBoard)