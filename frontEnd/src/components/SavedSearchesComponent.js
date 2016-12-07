import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSearches} from './actions/action'

class SavedSearchesComponent extends Component {

  componentWillMount(){
    this.props.showSearches(this.props.user.userID)
  }

  render(){
    return(

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showSearches: showSearches}, dispatch)
}

function mapStateToProps(state) {
  return {savedSearches: state.savedSearches, user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(auth(SavedSearchesComponent))
