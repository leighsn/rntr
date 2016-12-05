import React from 'react'
import { Route } from 'react-router'
import SignUpComponent from './components/SignUpComponent'
import PreferencesComponent from './components/PreferencesComponent'
import LogInComponent from './components/LogInComponent'
import HomeComponent from './components/HomeComponent'

import App from './components/App'
const Routes = (
  <Route path="/" component={App} >
    <Route path="/home" component={HomeComponent} />
    <Route path="/preferences" component={PreferencesComponent} />
    <Route path="/sign-up" component={SignUpComponent}/>
    <Route path="/log-in" component={LogInComponent}/>
  </Route>
)

module.exports = Routes
