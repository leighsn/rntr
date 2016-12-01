import React from 'react'
import { Route, hashHistory, IndexRoute } from 'react-router'
import SignUpComponent from './components/SignUpComponent'
<<<<<<< HEAD
import MapComponent from './components/MapComponent'
=======
import LogInComponent from './components/LogInComponent'
>>>>>>> f9a9d474f01bfb0e7ef3f2b4eb78ad40632e2dbc

// import components
import App from './components/App'
import TestComponent from './components/TestComponent'

const Routes = (
  <Route path="/" component={App} >
    <Route path="/show-test" component={TestComponent}/>
    <Route path="/sign-up" component={SignUpComponent}/>
    <Route path="/map" component={MapComponent}/>
    <Route path="/log-in" component={LogInComponent}/>
  </Route>
)

module.exports = Routes
