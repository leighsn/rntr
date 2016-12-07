import React from 'react'
import { Link } from 'react-router'
import { logOut} from '../actions/action.js'


const LinkComponent = () => {
  var navbar


  if (localStorage.getItem('token')){ 
    navbar=<ul id='nav'><li><Link to='/search'>Search</Link></li><li><Link to='/preferences'>Preferences</Link></li><a href='javascript:' onClick={logOut}>Log Out</a></ul>
  
  }
  else {
    navbar=<ul id='nav'><li><Link to='/log-in'>Log In</Link></li><li><Link to='/sign-up'>Sign Up</Link></li></ul>

  }

  return (
    <div>{navbar}</div>
  )
}



module.exports = LinkComponent




