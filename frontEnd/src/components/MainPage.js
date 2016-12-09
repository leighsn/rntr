import React, { Component } from 'react';
import ApartmentSearchComponent from './ApartmentSearchComponent'
import ResultsComponent from './ResultsComponent'
import SavedSearchesComponent from './SavedSearchesComponent'

export default class MainPage extends Component {

  render(){
    return(
      <div>
        <ApartmentSearchComponent />
        <div className="five columns">
          <ResultsComponent />
        </div>
        <div>
          <SavedSearchesComponent />
        </div>
      </div>
    )
  }
}
