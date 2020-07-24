import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo, signOut} from '../actions/User'

import HabitsContainer  from '../containers/HabitsContainer.js'
import  DailyContainer  from '../containers/DailyContainer.js'
// import DashBoard  from '../containers/DashBoard.js'

// MUI STUFF
import { Grid, Button } from '@material-ui/core'

class Home extends React.Component{
  

  handleClick = () => {
    localStorage.removeItem('token')
    this.props.signOut()
    this.props.history.push('/signin')
  }

  componentDidMount(){
    this.props.fetchInfo()
  }

  render(){
    return(
    <div className="Home">
      <Grid container spacing= {3}>
        <Grid item xs={6}>
          <HabitsContainer habits={this.props.habits} tags={this.props.tags} />
        </Grid>

        <Grid>
          <DailyContainer daily={this.props.daily}/>
        </Grid>
      </Grid>
      <Button onClick={this.handleClick}>Logout</Button>
    </div>
   )
  }
}


const mapStateToProps = (state) => {
  const { user } = state.users
  return{
    tags: user.tags,
    habits: user.habits,
    daily: user.daily
  }
}


export default connect(mapStateToProps, { fetchInfo, signOut })(Home)