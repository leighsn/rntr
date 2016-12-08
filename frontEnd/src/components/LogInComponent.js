import React from 'react'
import { connect } from 'react-redux';
import { logIn } from '../actions/action.js'
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'


class LogInComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {email: "", password: ""}
  }


   handleSubmit(event){
    event.preventDefault()
    this.props.logIn(this.state.email, this.state.password)
  }

  handleCreateAccountLink(event){
    event.preventDefault()
    browserHistory.push('sign-up')
  }


   handleEmailChange(event){
     this.setState({email: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
 }


  render(){
  return (
    <div id='padding'>


    <center>
      <form  onSubmit={this.handleSubmit.bind(this)}>
        <label>Email:</label>
        <input onChange={this.handleEmailChange.bind(this)}type='email' id='email' /><br/>

        <label>Password:</label>
        <input onChange={this.handlePasswordChange.bind(this)} type='password' id='password' /><br/>

        <input type='submit' value='log in' />
        <hr width='20%'id='hr'/>

        <a href="javascript:" onClick={this.handleCreateAccountLink.bind(this)}> Create an Account</a>

      </form>
    </center>
    </div>
  )
}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({logIn: logIn},dispatch)
}

export default connect(null, mapDispatchToProps)(LogInComponent)
