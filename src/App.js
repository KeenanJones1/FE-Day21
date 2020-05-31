import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import DashBoard from './components/DashBoard'
import './App.css';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    textSecondary: 'green'
  },
  status: {
    danger: 'orange',
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path='/' render= { (props) => <Home {...props} />} />  */}
          <Route exact path='/signup' render= { (props) => <Signup {...props} />} /> 
          <Route exact path='/signin' render= { (props) => <Signin {...props} />} /> 
          {/* <Route exact path='/' render= { (props) => <DashBoard {...props} />} />  */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
