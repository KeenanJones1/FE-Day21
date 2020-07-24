import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'



const theme = createMuiTheme({
  palette: {
    primary: {main: '#486273', light: '#587E8C', contrastText: '#F2EC91'},
    secondary: {main: '#A67449', light: '#D9A25F', contrastText: '#00000f'},
  },
  status: { danger: 'orange' },
});

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      login: false
    }
  }

  
  render() {
    return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render= { (props) => <Home {...props} />} /> 
          <Route exact path='/signup' render= { (props) => <Signup {...props} />} /> 
          <Route exact path='/signin' render= { (props) => <Signin {...props} />} /> 
          <Redirect to="/signin"/>
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signedin: state.users.signedin
  }
}

export default connect(mapStateToProps)(App);
