import React from 'react'
import {Button, TextField} from '@material-ui/core';


class Signup extends React.Component{
  constructor(){
   super()
   this.state = {

   }
  }

  handleInputChange = (event) => {
    this.setState({
        ...this.state, [event.target.name]: event.target.value
    })
    console.log(this.state)
}

 render(){
  return(
   <div className="Signup">
     <h1>Sign Up For Free</h1>
       <form method="Post">

         <TextField name="email" className="sign-up-field" id="" placeholder="Email"/>
         <TextField name="password" className="sign-up-field" id="" placeholder="Password"/>
         <TextField name="confirm-password" className="sign-up-field" id="" placeholder="Confirm Password"  color="white"
/>
        <br/>
         
        <Button id="sign-up-button">Signup</Button>

       </form>
     </div>
  )
 }
}

export default Signup