import React from 'react'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


const MapComponent = (props) => {

  function handleSubmit(event){
    event.preventDefault()
    
    // props.signUp(event.target.children[1].value, event.target.children[3].value)

    props.geoLocate(event.target.children[1].value, event.target.children[3].value)
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


module.exports = MapComponent
