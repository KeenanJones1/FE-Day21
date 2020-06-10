import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo} from '../actions/User'
import Habits  from '../containers/Habits.js'
import Daily from '../containers/Daily.js'

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
      Home has the infomation about the app and might just be a container component for login and signup
      <Habits />
      <Daily /> 
    </div>
   )
  }
}


const mapStateToProps = (state) => {
  const { user } = state.users
  console.log(user)
  // const { state } = this.props.users
  // return{
  //   habits: state.habits,
  //   dallies: state.dallies
  // }
}


export default connect(mapStateToProps, { fetchInfo })(Home)