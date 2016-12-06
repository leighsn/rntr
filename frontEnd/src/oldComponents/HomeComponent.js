import React from 'react'
import { connect } from 'react-redux';
import ApartmentSearchComponent from './ApartmentSearchComponent'

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <ApartmentSearchComponent />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(HomeComponent)
