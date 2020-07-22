import React from 'react'
import {connect} from 'react-redux'
import {Card, CardContent, CardActions, Dialog, DialogActions, Typography, IconButton, Checkbox} from '@material-ui/core'
import { AddCircle, RemoveCircle } from '@material-ui/icons'
import withStyles from '@material-ui/core/styles/withStyles'


const styles = theme => ({
  card: {
    backgroundColor: theme.palette.primary.light,
    margin: 10,
    padding: 10,
    minWidth: 275,
    position: 'relative',
    left: 60,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest,
    }),
  },
})

class Daily extends React.Component {
render() {
  const {habit, classes}=this.props
  return (
  <Card className={classes.card}>
    <CardContent>
      <Typography>{habit.title}</Typography>
      <Typography>{habit.note}</Typography>
    </CardContent>

    <CardActions>
      <IconButton>
        <RemoveCircle/>
      </IconButton>
      <Checkbox/>
        <Typography>
          Completed?
        </Typography>
      
    </CardActions>


  <Dialog>
    <DialogActions>

    </DialogActions>
  </Dialog>

  </Card>
  )
 }
}

export default connect(null, {})(withStyles(styles)(Daily));
