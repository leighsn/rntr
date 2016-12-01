import React from 'react'
import { getDistance } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



const DistanceComponent = (props) => {

  function handleSubmit(event){
    event.preventDefault()

    // props.signUp(event.target.children[1].value, event.target.children[3].value)

    props.getDistance(event.target.children[1].value, event.target.children[4].value)
  }



  return (
    <div>
    <br/>
      Im the map Im the map
      <br/>
      <br/>
      <form onSubmit={handleSubmit.bind(this)}>
        <label for='Origin'>Origin:</label>
        <input type='text' id='origin' /><br/>

        <label for='Destination'>Destination:</label>
        <input type='text' id='destination' /><br/>

        <input type='submit' />
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getDistance: getDistance},dispatch)
}

export default connect(null, mapDispatchToProps)(DistanceComponent)
// module.exports = MapComponent
