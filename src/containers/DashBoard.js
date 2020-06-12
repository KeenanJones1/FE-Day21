import React from 'react'

class DashBoard extends React.Component{



 render(){
  console.log(this.props)
  return(
   <div>
    DashBoard has the graphs and is conditionally rendered based on admin = true.
   </div>
  )
 }
}





export default DashBoard