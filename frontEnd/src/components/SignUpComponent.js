import React from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../actions/action.js'
import { bindActionCreators } from 'redux';


const SignUpComponent = (props) => {

  function handleSubmit(event){
    event.preventDefault()
    props.signUp(event.target.children[1].value, event.target.children[3].value)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for='email'>Email:</label>
        <input type='email' id='email' /><br/>

        <label for='password'>Password:</label>
        <input type='password' id='password' /><br/>

        <label for='confirm'>Confirm Password:</label>
        <input type='password' id='confirm' /><br/>

        <input type='submit' />
      </form>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({signUp: signUp},dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpComponent)
// module.exports = SignUpComponent
