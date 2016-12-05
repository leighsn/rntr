import React from 'react'
import { Route, hashHistory, IndexRoute } from 'react-router'

import SignUpComponent from './components/SignUpComponent'
import PreferencesComponent from './components/PreferencesComponent'
import DistanceComponent from './components/DistanceComponent'
import SchoolComponent from './components/SchoolComponent'
import AmenitiesComponent from './components/AmenitiesComponent'
import LogInComponent from './components/LogInComponent'
import CrimeComponent from './components/CrimeComponent'
import HomeComponent from './components/HomeComponent'
import TestComponent from './components/TestComponent'

import App from './components/App'

const Routes = (

  <Route path="/" component={App} >
    <Route path="/home" component={HomeComponent} />
    <Route path="/preferences" component={PreferencesComponent} />
    <Route path="/show-test" component={TestComponent}/>
    <Route path="/sign-up" component={SignUpComponent}/>
    <Route path="/distance" component={DistanceComponent}/>
    <Route path='/school' component={SchoolComponent}/>
    <Route path="/amenities" component={AmenitiesComponent}/>
    <Route path="/log-in" component={LogInComponent}/>
    <Route path="/crime" component={CrimeComponent} />
  </Route>
)

module.exports = Routes
