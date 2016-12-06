import React from 'react'
import { Link } from 'react-router'

const LinkComponent = () => {
  return (
    <div>
      <Link to="/search">Search</Link><span>             </span>
      <Link to="/preferences">Preferences</Link><span>             </span>
      <Link to="/sign-up">Sign Up</Link><span>             </span>
      <Link to="/log-in">Log In</Link>

    </div>
  )
}

module.exports = LinkComponent
