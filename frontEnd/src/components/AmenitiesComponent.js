import React from 'react'
import { getAmenities } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const AmenitiesComponent = (props) => {

  function handleSubmit(event){
    event.preventDefault()
    props.getDistance(event.target.children[1].value, event.target.children[4].value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit.bind(this)}>
        <label for='Origin'>Origin:</label>
        <input type='text' id='origin' /><br/>

        <label for='Destination'>Destination:</label>
        <input type='text' id='destination' /><br/>

        <input type='submit' />
      </form>
      <h4>Amenities{props.travel_time}</h4>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAmenities: getAmenities},dispatch)
}

function mapStateToProps(state) {
  return {amenities: state.amenities}
}

export default connect(mapStateToProps, mapDispatchToProps)(DistanceComponent)
// module.exports = MapComponent
