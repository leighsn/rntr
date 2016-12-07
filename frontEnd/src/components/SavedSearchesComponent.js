import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showApartment } from '../actions/action'
import auth from '../lib/auth'
import { bindActionCreators } from 'redux';

class SavedSearchesComponent extends Component {

  handleClick(event){
    event.preventDefault()
    this.props.showApartment(event.target.id)
  }

  render(){
    return(
      <ul>
      {this.props.savedSearches.map(search => {
        return <li id={search.id} onClick={this.handleClick.bind(this)}>{search.address}</li>
      })}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showApartment: showApartment}, dispatch)
}

function mapStateToProps(state) {
  return {savedSearches: state.savedSearches, user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(auth(SavedSearchesComponent))
