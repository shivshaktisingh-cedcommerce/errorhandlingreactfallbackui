import React, { Component } from 'react'


export class ErrorUi extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
          return{
            hasError:true
          }
    }
  
  render() {
    
        if(this.state.hasError){
            return <div style={{backgroundColor:"gray" , width:"40vw" , display:"flex" , margin:"auto" , justifyContent:"center" ,color:"white" , minHeight:"20vw",fontSize:"3vw"}}>Number is less than 5</div>
        }
        return this.props.children
    
    
  }
}

export default ErrorUi