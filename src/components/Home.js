import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo} from '../actions/User'
import HabitsContainer  from '../containers/HabitsContainer.js'
import  Daily  from '../containers/Daily.js'
import DashBoard  from '../containers/DashBoard.js'

// MUI STUFF
import { Grid } from '@material-ui/core'

class Home extends React.Component{
  constructor(){
   super()
  }

  componentDidMount(){
    this.props.fetchInfo()
  }

  render(){
   return(
    <div className="Home">
      <Grid container spacing= {3}>
        <Grid item xs={12}> 
          {/* <DashBoard /> */}
        </Grid>

        <Grid item xs={6}>
          <HabitsContainer habits={this.props.habits} tags={this.props.tags} />
        </Grid>

        <Grid item xs={6}>
          {/* <Daily daily={this.props.daily} />  */}
        </Grid>
      </Grid>
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


export default connect(mapStateToProps, { fetchInfo })(Home)