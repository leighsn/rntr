import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { aptSearch } from '../actions/action'
import { browserHistory } from 'react-router'
var Loading = require('react-loading')


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
      <div>
       <Loading type='balls' color='#e3e3e3' />
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
