import React from 'react'
import { connect } from 'react-redux';
import { signUp } from '../actions/action.js'
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'



const SignUpComponent = (props) => {

  function handleSubmit(event){
    event.preventDefault()
    props.signUp(event.target.children[1].value, event.target.children[4].value)
    // this.setState({..})
  }


  function handleCreateAccountLink(event){
    event.preventDefault()
    browserHistory.push('log-in')
  }

  return (
    <div id='padding'>
    <center>
      <form onSubmit={handleSubmit.bind(this)}>
        <label>Email:</label>
        <input type='email' id='email' /><br/>

        <label>Password:</label>
        <input type='password' id='password' /><br/>

        <label>Confirm Password:</label>
        <input type='password' id='confirm' /><br/>

        <input type='submit' value='Create an Account' />
        <p>or <a href="javascript:" onClick={handleCreateAccountLink.bind(this)}>Log In</a></p>

      </form>
      </center>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({signUp: signUp},dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpComponent)
// module.exports = SignUpComponent
