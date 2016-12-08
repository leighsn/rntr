import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showApartment } from '../actions/action'
import auth from '../lib/auth'
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';



class SavedSearchesComponent extends Component {

  handleClick(event){
    event.preventDefault()
    this.props.showApartment(event.target.id)
  }

  render(){
    return(
      <div id="saved-list">
        <ul>
        {this.props.savedSearches.map(search => {
          return <button><li id={search.id} onClick={this.handleClick.bind(this)}><FontAwesome
        className='fa fa-times'
        name='x'
        size='1x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />  {search.address}</li></button>
        })}
        </ul>
      </div>
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
