import React from 'react';
import {
  connect
} from 'react-redux'
import {
  addHabits
} from '../../actions/Habits'

// MUI STUFF
import {
  Grid,
  TextField,
  Button,
  Select,
  Switch,
  MenuItem,
  FormControlLabel
} from '@material-ui/core'


class HabitsInput extends React.Component {
    state = {
      title: '',
      difficulty: '',
      note: '',
      type: 'BadHabit',
      user_id: ''
    }





    handleSwitch = () => {
      if (this.state.type === 'BadHabit') {
        this.setState({
          type: 'GoodHabit'
        })
      } else {
        this.setState({
          type: 'BadHabit'
        })
      }
    }

    handleNote = (event) => {
      this.setState({
        note: event.target.value
      })
    }

    handleTitle = (event) => {
      this.setState({
        title: event.target.value
      })
    }

    handleSelect = (event) => {
      this.setState({
        difficulty: event.target.value
      })
    }

    handleSubmit = () => {

      const newState = {
        state: {
          ...this.state,
          user_id: this.props.user_id
        }
      }

      this.setState({
        title: '',
        difficulty: '',
        note: '',
        type: 'BadHabit',
        user_id: ''
      })


      this.props.addHabits(newState.state)
    }

render(){
  return(
<Grid container direction='column' justify='space-between' spacing={8} alignItems='center'>
    <h1>
    Create New Habit 
    </h1>
    <TextField required name="title" 
    value={this.state.title}
    color="secondary"
    label="Title" onChange={(event) => this.handleTitle(event)}/>

    <TextField 
      onChange={(event) => this.handleNote(event)}
      name="note"
      label="Notes"
      multiline
      rows={4}
      value={this.state.note}
      color="secondary"
    />

    <FormControlLabel control={<Switch onChange={this.handleSwitch}/>} label={this.state.type}>
    </FormControlLabel>
      
      

    <Select label="Difficulty" 
      onChange={(event) => this.handleSelect(event)}>
      <MenuItem name={1} value={1}>Level 1</MenuItem>
      <MenuItem name={2} value={2}>Level 2</MenuItem>
      <MenuItem name={3} value={3}>Level 3</MenuItem>
      <MenuItem name={4} value={4}>Level 4</MenuItem>
      <MenuItem name={5} value={5}>Level 5</MenuItem>
    </Select>
    
    <Button variant="contained" color='primary' onClick = {this.handleSubmit} >
      Submit
  </Button>
</Grid>
  )
  }
};


    const mapStateToProps = (state) => {
      return {
        user_id: state.users.user.id
      }
    }


    export default connect(mapStateToProps, {
      addHabits
    })(HabitsInput);