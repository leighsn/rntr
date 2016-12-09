import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showApartment } from '../actions/action'
import auth from '../lib/auth'
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { deleteSearch } from '../actions/action.js'

class SavedSearchesComponent extends Component {

  handleClick(event){
    event.preventDefault()
    this.props.showApartment(event.target.id)
  }

  handleDelete(event){
    event.preventDefault()
    this.props.deleteSearch(event.target.parentNode.id)
    event.stopPropagation()
  }

  render(){
    return(
      <div id="saved-list" className="six columns">
        <h4>Previous Searches:</h4>
        {this.props.savedSearches.map(search => {
          return <div>
            <button style={{zIndex: 0}} id={search.id} onClick={this.handleClick.bind(this)}>
              <FontAwesome
                className='fa fa-times'
                onClick={this.handleDelete.bind(this)}
                name='x'
                size='1x'
                style={{ padding: '3px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', zIndex: 1 }}
              />
              <span id={search.id}>  {search.address.split(',')[0]}</span>
            </button>
          </div>
        })}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showApartment: showApartment, deleteSearch: deleteSearch}, dispatch)
}

function mapStateToProps(state) {
  return {savedSearches: state.savedSearches, user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(auth(SavedSearchesComponent))
