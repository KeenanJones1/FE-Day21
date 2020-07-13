import React from 'react';
import {connect} from 'react-redux'
import { fetchUser } from '../actions/User'
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});



class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  }


  goSignup = () => {
    this.props.history.push('/signup')
  }

  handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });

  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.fetchUser(this.state)
    // set Loading to true
  }

  handleLoading = () => {
    if(this.props.loading === 'done' && this.props.signedin === true){
      localStorage.setItem('token', this.props.token)
      this.props.history.push('/')
      return(
        <div>Done loading...</div>
      )
    }
    else{
      return(
        <div>
          Loading....
        </div>
      )
      
    }
  }


  render() {
    const { classes } = this.props
    console.log("Signedin", this.props)
    if(this.props.loading === false){
      return ( 
        <Container component = "main" maxWidth = "xs" >
          <CssBaseline / >
          <div className = { classes.paper} >
            <Avatar className = { classes.avatar } >
              < LockOutlinedIcon / >
            </Avatar> 
            <Typography component = "h1" variant = "h5" >
              Sign in
            </Typography> 
              <form className = { classes.form } noValidate >
    
                <TextField variant = "outlined"
                  value={this.state.email}
                  margin = "normal"
                  required fullWidth id = "email"
                  label = "Email Address"
                  name = "email"
                  autoComplete = "email"
                  autoFocus 
                  onChange = { (event) => this.handleInputChange(event)}
                />
            
                <TextField variant = "outlined"
                  margin = "normal"
                  required fullWidth name = "password"
                  label = "Password"
                  type = "password"
                  id = "password"
                  autoComplete = "current-password" 
                  onChange = { (event) => this.handleInputChange(event)}
                />
    
            <FormControlLabel control = { <Checkbox value = "remember" color = "primary" /> }
                label = "Remember me" />
              <Button type = "submit"
                onClick={(event) => this.handleOnSubmit(event)}
                fullWidth variant = "contained"
                color = "primary"
                className = { classes.submit}>
                Sign In 
              </Button> 
    
                <Grid container >
                  <Grid item >
                    <Link href = "#"
                      onClick = {this.goSignup}
                      variant = "body2" > { "Don't have an account? Sign Up"} 
                    </Link> 
                  </Grid> 
                </Grid> 
              </form> 
          </div> 
          <Box mt = {8}>
            
          </Box> 
          </Container>
        );
    }
    
    else{
      return(
        this.handleLoading()
      )
    }
  }
}



const mapStateToProps = (state) => {
  const { users } = state
  return{
    loading: users.loading,
    token: users.user.token,
    signedin: users.signedin
  }
}


export default connect(mapStateToProps, {fetchUser})(withStyles(styles)(Signin))