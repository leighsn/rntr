import React from 'react'
import { getAmenities } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const AmenitiesComponent = (props) => {

  function handleSubmit(event){
    event.preventDefault()
    props.getAmenities(event.target.children[1].value, event.target.children[3].value)
  }

  function amenitiesList() {
    return props.amenities.map(function(amen) {
      return (<li>{amen.name}: {amen.lat}, {amen.lon}</li>)
    })
  }

  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit.bind(this)}>
        <label htmlFor='zipcode'>Zipcode:</label>
        <input type='text' id='zipcode' /><br/>
        <label htmlFor='search'>Search Term:</label>
        <input type='text' id='search' /><br/>
        <input type='submit' />
      </form>
      <h4>Giant Amenities Dump:</h4>
      <ul>
        {amenitiesList()}
      </ul>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAmenities: getAmenities},dispatch)
}

function mapStateToProps(state) {
  return {amenities: state.amenities || []}
}

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesComponent)
// module.exports = MapComponent
