import React from 'react'
import { savePreferences } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from 'react-google-autocomplete';

class PreferencesComponent extends React.Component{
  constructor(props){
    super(props)
      this.state = {destination: "",commute: 1, schools: 1, amenities: 1, safety: 1}
      this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
  // handleCommuteChange(event){
  //   this.setState({commute_weight: event.target.value})
  // }

  handleSubmit(event){
    event.preventDefault()
    this.props.savePreferences(this.props.user, this.state)
  }

  handleChange(event){
    let newStateAttr = {}
    newStateAttr[event.target.id] = parseInt(event.target.value)

    this.setState(newStateAttr)
  }

  handleDestinationChange(event){
    let newStateAttr = {}
    newStateAttr[event.target.id] = event.target.value
    this.setState(newStateAttr)
  }

  render(){
    return(

      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label id="destination">Destination:</label>
          <Autocomplete
            onChange={this.handleDestinationChange.bind(this)}
            id="destination"
            style={{width: '30%'}}
            onPlaceSelected={(place) => {
              this.setState({"destination": place})
              console.log(place);
            }}
            types={['address']}
            componentRestrictions={{country: "us"}}
          />


          <p><label id="commute">Commute: </label>

          <select id="commute" onChange={this.handleChange.bind(this)}>
            <option value='-'>-</option>
              {
                this.options.map(opt => {
                return <option value={opt}>{opt}</option>
              })}
          </select></p>

          <p><label id="schools">Schools: </label>
            <select id="schools" onChange={this.handleChange.bind(this)}>
              <option value='-'>-</option>
                {
                  this.options.map(opt => {
                  return <option value={opt}>{opt}</option>
                })}
            </select></p>

          <p><label id="safety">Safety: </label>
            <select id="safety" onChange={this.handleChange.bind(this)}>
              <option value='-'>-</option>
                {
                  this.options.map(opt => {
                  return <option value={opt}>{opt}</option>
                })}
            </select></p>

          <p><label id="amenities">Amenities: </label>
            <select id="amenities" onChange={this.handleChange.bind(this)}>
              <option value='-'>-</option>
                {
                  this.options.map(opt => {
                  return <option value={opt}>{opt}</option>
                })}
            </select></p>

          <p><input type="submit"/></p>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({savePreferences: savePreferences}, dispatch)
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesComponent)
