import React, { Component } from 'react';
import ApartmentSearchComponent from './ApartmentSearchComponent'
import SavedSearchesComponent from './SavedSearchesComponent'

export default class MainPage extends Component {

  render(){
    return(
      <div>
        <ApartmentSearchComponent />
        <SavedSearchesComponent />
      </div>
    )
  }
}
