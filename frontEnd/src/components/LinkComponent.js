import React from 'react'
import { Link } from 'react-router'

const LinkComponent = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/preferences">Preferences</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/log-in">Log In</Link>

    </div>
  )
}

module.exports = LinkComponent
