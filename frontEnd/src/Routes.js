import React from 'react'
import { Route, hashHistory, IndexRoute } from 'react-router'
import SignUpComponent from './components/SignUpComponent'

// import components
import App from './components/App'
import TestComponent from './components/TestComponent'

const Routes = (
  <Route path="/" component={App} >
    <Route path="/show-test" component={TestComponent}/>
      <Route path="/sign-up" component={SignUpComponent}/>
  </Route>
)

module.exports = Routes
