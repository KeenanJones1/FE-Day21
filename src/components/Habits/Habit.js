import React from 'react'
// import TagsContainer from '../../containers/TagsContainer'
import { deleteHabits, editHabit, moveHabit } from '../../actions/Habits'
import { connect } from 'react-redux'

// MUI STUFF
import { MenuItem, Select, Grid, Dialog, Button, TextField, DialogActions, DialogContent, Card, CardActions, CardContent, Typography, IconButton, Collapse } from '@material-ui/core';

import { Delete, Edit, ExpandMore, AddCircle } from '@material-ui/icons'
import withStyles from '@material-ui/core/styles/withStyles'



const styles = theme => ({
  card: {
    backgroundColor: theme.palette.secondary.light,
    margin: 10,
    padding: 10,
    minWidth: 275,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest,
    }),
  },
})

class Habit extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
      setOpen: false,
      title: '',
      note: '',
      difficulty: 'difficulty',
      type: 'BadHabit',
      checked: true,
      expanded: false,
      setExpanded: false,
    };
  }


  handleDelete = () => {
    this.props.deleteHabits(this.props.habit.id)
  }

  handleClickOpen = (habit) => {
    this.setState({
      setOpen: true,
      open: true,
      title: habit.title,
      note: habit.note,
      difficulty: habit.difficulty,
      type: habit.type
    })
  }

  handleClose = () => {
    this.setState({
      setOpen: false,
      open: false
    })
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleNote = (event) => {
    this.setState({
      note: event.target.value
    })
  }

  handleEditSubmit = (id) => {
    this.handleClose()
    this.props.editHabit(this.state, id)
  }

  handleSelect = (event) => {
    this.setState({
      difficulty: event.target.value
    })
  }

  handleInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSwitch = () => {
    if (this.state.type === 'BadHabit') {
      this.setState(prevState => {
        return {
          ...prevState,
          type: 'GoodHabit',
          checked: !prevState.checked
        }
      })
    } else {
      this.setState(prevState => {
        return {
          type: 'BadHabit',
          checked: !prevState.checked

        }
      })
    }
  }

  handleExpandClick = () => {
    this.setState(prevState => {
      return {
        expanded: !prevState.expanded
      }
    })
  }

  handleDailyHabit = (id) => {
    this.props.moveHabit(id)
  }






  render() {
    const {habit, classes}=this.props
    const {title, difficulty, note, expanded}=this.state
    return ( 
      <Card className = {classes.card}>
        <CardContent>
          <Typography variant='subtitle1'> 
            { habit.title } 
          </Typography> 
        </CardContent>
        <CardActions >
          <IconButton size = "small" color = "primary" className = { classes.expand } onClick = { () => this.handleDailyHabit(habit.id) }>
            <AddCircle /> 
          </IconButton>
          <IconButton size = "small" color = "primary" onClick = { this.handleDelete }>
            <Delete /> 
          </IconButton>
          <IconButton size = "small" color = "primary" onClick = { () => this.handleClickOpen(habit) }>
            <Edit /> 
          </IconButton>
          <IconButton size = "small" color = "primary" className = { classes.expand } onClick = { () => this.handleExpandClick() }>
            <ExpandMore /> 
          </IconButton>
        </CardActions>
        <Collapse in = { expanded } timeout = "auto" unmountOnExit>
          <CardContent >
          <Typography variant='subtitle1'>{habit.note}</Typography> 
          <Typography variant='subtitle1'> Level { habit.difficulty } difficulty</Typography> 
          <Typography variant='subtitle1'>{ habit.type }</Typography> 
          </CardContent> 
        </Collapse>

      {/* <TagsContainer /> */ } 
        <Dialog open = { this.state.open } onClose={this.handleClose}>
          <DialogContent>
            <Grid container direction = 'column' justify='space-between' spacing={3} alignItems='center'>
              <TextField required name="title" color="secondary" label="Title" 
                onChange={(event) => this.handleTitle(event)}
                placeholder={title}/> 
              <TextField onChange={(event) => this.handleNote(event)} name="note" label="Notes" multiline 
                rows={4}
                value={note}
                color="secondary"/>
              <Select label="Difficulty" onChange={(event) => this.handleSelect(event)} value={difficulty}>
                <MenuItem name={1} value={1}>Level 1</MenuItem> 
                <MenuItem name={2} value={2}>Level 2</MenuItem> 
                <MenuItem name={3} value={3}>Level 3</MenuItem> 
                <MenuItem name={4} value={4}>Level 4</MenuItem> 
                <MenuItem name={5} value={5}>Level 5</MenuItem> 
              </Select> 
            </Grid> 
          </DialogContent>

            <DialogActions >
              <Button onClick = { this.handleClose }> 
                Cancel 
              </Button> 
              <Button onClick = { () => this.handleEditSubmit(habit.id) }> 
                Submit 
              </Button> 
            </DialogActions>  
          </Dialog> 
      </Card>
    )
  }
}





export default connect(null, {deleteHabits, editHabit, moveHabit})(withStyles(styles)(Habit));
