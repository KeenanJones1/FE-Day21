import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';




const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

 class Signup extends React.Component {
    constructor(){
        super()
        this.state = {
          user: {
            password: '',
            repeatPassword: '',
        },
        submitted: false,
        }
    }

    componentDidMount() {
      ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
          const { user } = this.state;
          if (value !== user.password) {
              return false;
          }
          return true;
      });
  }

    handleInputChange = (event) => {
      const { user } = this.state;
        user[event.target.name] = event.target.value;
        if (event.target.name === 'password') {
            this.form.isFormValid(false);
        }
        else {

          this.setState({
              ...this.state, [event.target.name]: event.target.value
          })
        }

        this.setState({ user });
        console.log(this.state)
    }

    handleForm = (event) => {
        event.preventDefault()
        const signupObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3000/signup', signupObj)
        .then( resp => resp.json())
        .then(data =>
            {if(data.error){alert(data.error)}
                else{
                    localStorage.setItem('token', data.token)
                    this.props.history.push('/')
                }
            }
        )
    }
 
    goLogin = () => {
        this.props.history.push('/signin')
    }
 
    

    render(){
        const { classes } = this.props;
        const { user, submitted } = this.state;

        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <ValidatorForm    
              ref={r => (this.form = r)}
              className={classes.form} >
                <Grid container spacing={2}>
                  
                  <Grid item xs={12}>
                    <TextField                    
                      onChange={(event) => {this.handleInputChange(event)}}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email "
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      onChange={(event) => {this.handleInputChange(event)}}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      validators={['required']}
                      errorMessages={['this field is required']}
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                
                    <TextValidator
                      onChange={(event) => {this.handleInputChange(event)}}
                      name="repeatPassword"
                      variant="outlined"
                      type="password"
                      required
                      fullWidth
                      id="password"
                      label="Repeat password"
                      validators={['isPasswordMatch', 'required']}
                      errorMessages={['password mismatch', 'this field is required']}
                      value={user.repeatPassword}
                      autoFocus
                    />
                  
                  </Grid>
                </Grid>
                <Button
                onClick={(event) => {this.handleForm(event)} } 
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={submitted}
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" onClick={this.goLogin} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </div>
            <Box mt={5}>
            </Box>
          </Container>
        );
    }
}

export default withStyles(styles)(Signup);