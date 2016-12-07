import React from 'react'
import { connect } from 'react-redux';
import { logIn } from '../actions/action.js'
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'


const LogInComponent = (props) => {

  function handleSubmit(event){
    event.preventDefault()
    props.logIn(event.target.children[1].value, event.target.children[4].value)
  }

 function handleCreateAccountLink(event){
    event.preventDefault()
    browserHistory.push('sign-up')
  }


  return (
    <div id='padding'>
   
    <center>
      <form  onSubmit={handleSubmit.bind(this)}>
       
        <label>Email:</label>
        <input type='email' id='email' /><br/>

        <label>Password:</label>
        <input type='password' id='password' /><br/>

        <input type='submit' value='log in' /> 
        <hr width='20%'id='hr'/>

        <a href="javascript:" onClick={handleCreateAccountLink.bind(this)}> Create an Account</a>
        
      </form>
  </center>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({logIn: logIn},dispatch)
}

export default connect(null, mapDispatchToProps)(LogInComponent)
