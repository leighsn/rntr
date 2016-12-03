import React from 'react'
import { savePreferences } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class PreferencesComponent extends React.Component{
  constructor(props){
    super(props)
      this.state = {destination: "",commute: "", schools: "", amenities: "", safety: ""}
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
    newStateAttr[event.target.id] = event.target.value
    this.setState(newStateAttr)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label id="destination">Destination:</label>
          <input type="text" id="destination" onChange={this.handleChange.bind(this)}/>

          <label id="commute">Commute:</label>
          <input type="text" id="commute" onChange={this.handleChange.bind(this)}/>

          <label id="schools">Schools:</label>
          <input type="text" id="schools" onChange={this.handleChange.bind(this)}/>

          <label id="safety">Safety:</label>
          <input type="text" id="safety" onChange={this.handleChange.bind(this)}/>

          <label id="schools">Amenities:</label>
          <input type="text" id="amenities" onChange={this.handleChange.bind(this)}/>

          <input type="submit"/>
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
