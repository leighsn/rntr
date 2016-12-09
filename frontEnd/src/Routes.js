import React from 'react'
import { Route } from 'react-router'
import SignUpComponent from './components/SignUpComponent'
import PreferencesComponent from './components/PreferencesComponent'
import LogInComponent from './components/LogInComponent'
import SavedSearchesComponent from './components/SavedSearchesComponent'
import ApartmentSearchComponent from './components/ApartmentSearchComponent'
import ResultsComponent from './components/ResultsComponent'
import MainPage from './components/MainPage'
import Loader from './components/Loader'

import App from './components/App'
const Routes = (
  <Route path="/" component={App} >
    <Route path="search" component={ApartmentSearchComponent} />
    <Route path="preferences" component={PreferencesComponent} />
    <Route path="sign-up" component={SignUpComponent}/>
    <Route path="log-in" component={LogInComponent}/>
    <Route path="results" component={MainPage}/>
    <Route path="loading" component={Loader}/>
  </Route>
)

module.exports = Routes
