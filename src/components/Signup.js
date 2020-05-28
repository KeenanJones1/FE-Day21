import React from 'react'
import Button from '@material-ui/core/Button';


class Signup extends React.Component{
  constructor(){
   super()
  }

 render(){
  return(
   <div className="Signup">
     <h1>Sign Up For Free</h1>
       <form method="Post">
         <input type="text" name="email" className="sign-up-field" id="" placeholder="Email"/>


         <input type="password" name="password" id="" placeholder="Password" className="sign-up-field"/>

         <input type="password" name="confirm-password" id="" placeholder="Confirm password" className="sign-up-field"/>
         <br/>
         <input type="submit" value="Sign Up" id="sign-up-button"/>
       </form>
       <Button/>
     </div>
  )
 }
}

export default Signup