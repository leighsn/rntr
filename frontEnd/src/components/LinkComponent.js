import React from 'react'
import { Link } from 'react-router'

const LinkComponent = () => {

  // var navbar= "
    // <li><Link to='/search'>Search</Link></li>
    // 
    // <li><Link to={"/sign-up"}>Sign Up</Link></li>
    // "
    // || localStorage.getItem('jwt')!== undefined
  
  var navbar
  if (localStorage.getItem('jwt')!== "" ){ 
    navbar=<ul id='nav'><li><Link to='/search'>Search</Link></li><li><Link to='/preferences'>Preferences</Link></li><li><Link to='/log-out'>Log Out</Link></li></ul>
  
  }
  else {
    navbar=<ul id='nav'><li><Link to='/log-in'>Log In</Link></li><li><Link to='/sign-up'>Sign Up</Link></li></ul>

  }

  return (
    <div>{navbar}</div>
  )
}

module.exports = LinkComponent



