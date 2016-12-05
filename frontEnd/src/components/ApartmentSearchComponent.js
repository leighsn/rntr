import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { aptSearch } from '../actions/action'

class ApartmentSearchComponent extends Component {

  constructor(props){
    super(props)
    this.state = {street: '', city: '', state: '', zip: ''}
  }

  handleStreetChange(event){
    this.setState({street: event.target.value})
  }
  handleCityChange(event){
    this.setState({city: event.target.value})
  }
  handleStateChange(event){
    this.setState({state: event.target.value})
  }
  handleZipChange(event){
    this.setState({zip: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    
    this.props.aptSearch(this.state, this.props.user.userID)
  }


  render() {
    return (
      <div>
        <br/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Street:</label>
          <input type='text' id='street' onChange={this.handleStreetChange.bind(this)} /><br/>

          <label>City:</label>
          <input type='text' id='city' onChange={this.handleCityChange.bind(this)} /><br/>

          <label>State:</label>
          <input type='text' id='state' onChange={this.handleStateChange.bind(this)} /><br/>

          <label>Zip:</label>
          <input type='text' id='zip' onChange={this.handleZipChange.bind(this)} /><br/>

          <input type='submit' value='Search' />
        </form>

        <div>
        <h4>Crime Data:</h4>
        <p>Violations: {this.props.apartment.crime.violation}</p>
        <p>Misdemeanors: {this.props.apartment.crime.misdemeanor}</p>
        <p>Felonies: {this.props.apartment.crime.felony}</p>
        <h4>Commute: {this.props.apartment.commute}</h4>
        <h3>There are {this.props.apartment.schools} good schools nearby</h3>
        </div>

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
