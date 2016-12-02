import React from 'react'
import { Link } from 'react-router'

const LinkComponent = () => {
  return (
    <div>

      <Link to="/show-test">Home</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/distance">Distance</Link>
      <Link to="/log-in">Log In</Link>
      <Link to="/crime">Crime</Link>

    </div>
  )
}

module.exports = LinkComponent
