import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
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
      {/* <Home /> */}
      <Signup/>
      {/* <Login/> */}
      {/* <DashBoard/> */}

    </div>
  );
}

export default App;
