import React from 'react'
import { Route, hashHistory, IndexRoute } from 'react-router'
import SignUpComponent from './components/SignUpComponent'
import PreferencesComponent from './components/PreferencesComponent'

import DistanceComponent from './components/DistanceComponent'
import SchoolComponent from './components/SchoolComponent'
import LogInComponent from './components/LogInComponent'
import CrimeComponent from './components/CrimeComponent'
import HomeComponent from './components/HomeComponent'

// import components
import App from './components/App'
import TestComponent from './components/TestComponent'

const Routes = (

  <Route path="/" component={App} >
    <Route path="/home" component={HomeComponent} />
    <Route path="/preferences" component={PreferencesComponent} />
    <Route path="/show-test" component={TestComponent}/>
    <Route path="/sign-up" component={SignUpComponent}/>
    <Route path="/distance" component={DistanceComponent}/>
    <Route path='/school' component={SchoolComponent}/>
    <Route path="/log-in" component={LogInComponent}/>
    <Route path="/crime" component={CrimeComponent} />
  </Route>
)

module.exports = Routes
