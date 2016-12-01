import React from 'react'
import { Link } from 'react-router'

const LinkComponent = () => {
  return (
    <div>
      <Link to="/show-test">Home</Link>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  )
}

module.exports = LinkComponent