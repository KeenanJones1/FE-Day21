import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {main: '#486273', light: '#587E8C', contrastText: '#F2EC91'},
    secondary: {main: '#A67449', light: '#D9A25F', contrastText: '#00000f'},
  },
  status: {
    danger: 'orange',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render= { (props) => <Home {...props} />} /> 
          <Route exact path='/signup' render= { (props) => <Signup {...props} />} /> 
          <Route exact path='/signin' render= { (props) => <Signin {...props} />} /> 
          {/* <Route exact path='/' render= { (props) => <DashBoard {...props} />} />  */}
        </Switch>
      </Router>

    </div>
    </ThemeProvider>
  );
}

export default connect()(App);
