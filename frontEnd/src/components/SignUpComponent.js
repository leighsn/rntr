import React from 'react'
import { connect } from 'react-redux';
import { signUp } from '../actions/action.js'
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'

class SignUpComponent extends React.Component {

   constructor(props) {
    super(props)
    this.state = {email: "", password: "", confirmation: ""}
  }
 // <h5>Found a place for rent?</h5> 
 //      RNTR checks if it best fits you

   handleSubmit(event){
    event.preventDefault()
    if (this.state.password !== this.state.confirmation){
      alert('Password and Confirmation do not Match!')
      browserHistory.push('sign-up')
    }
    else {
      this.props.signUp(this.state.email, this.state.password)
    }
    // props.signUp(event.target.children[1].value, event.target.children[4].value)
    // this.setState({..})
  }

   handleEmailChange(event){
    this.setState({email: event.target.value})
  }

   handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

   handleConfirmChange(event){
    this.setState({confirmation: event.target.value})
  }


   handleCreateAccountLink(event){
    event.preventDefault()
    browserHistory.push('log-in')
  }
  render(){
  return (
    <div id='padding'>
    <center>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Email:</label>
        <input type='email' id='email' onChange={this.handleEmailChange.bind(this)} /><br/>

        <label>Password:</label>
        <input type='password' id='password' onChange={this.handlePasswordChange.bind(this)} /><br/>

        <label>Confirm Password:</label>
        <input type='password' id='confirm' onChange={this.handleConfirmChange.bind(this)} /><br/>

        <input type='submit' value='Create an Account' />
        <p>or <a href="javascript:" onClick={this.handleCreateAccountLink.bind(this)}>Log In</a></p>

      </form>
      </center>
    </div>
  )
}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({signUp: signUp},dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpComponent)
// module.exports = SignUpComponent
