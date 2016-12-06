import React from 'react'
import { Link } from 'react-router'

const LinkComponent = () => {
  return (
    <div>
      <ul id='nav'>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/preferences">Preferences</Link></li>
      <li><Link to="/sign-up">Sign Up</Link></li>
      <li><Link to="/log-in">Log In</Link></li>
      </ul>
    </div>
  )
}

module.exports = LinkComponent
