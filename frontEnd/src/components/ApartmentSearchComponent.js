import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { aptSearch } from '../actions/action'
import { browserHistory } from 'react-router'
import SavedSearchesComponent from './SavedSearchesComponent'

import Autocomplete from 'react-google-autocomplete';

class ApartmentSearchComponent extends Component {

  constructor(props){
    super(props)
    this.state = {destination: '', zip: ''}
  }

  handleSubmit(event) {
    event.preventDefault()
    if(!!this.props.user.destination)
    {
      this.props.aptSearch(this.state, this.props.user.userID)
    }
    else {
      alert("Can't search without preferences!")
      browserHistory.push('preferences')
    }
  }

  render() {
    return (
      <div id='padding'>
        <br/>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label id="destination">Enter an address in New York City:</label>
          <Autocomplete
            id="destination"
            style={{width: '50%'}}
            onPlaceSelected={(place) => {
              this.setState({"destination": place.formatted_address})
              let zip = place.address_components.find((component)=>{
                return component.types[0] === "postal_code"}).long_name
              this.setState({"zip": zip})
              console.log(place);
            }}
            types={['address']}
            componentRestrictions={{country: "us"}}
          />
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({aptSearch: aptSearch}, dispatch)
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentSearchComponent)
