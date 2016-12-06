import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

export default function auth(ConnectedComponent){
  class AuthorizedComponent extends Component {

    componentWillMount(){
      if(!this.props.currentUser){
        browserHistory.push('log-in')
      }
    }
    componentWillReceiveProps(){
      if(!this.props.currentUser){
        browserHistory.push('log-in')
      }
    }
    render(){
      return(<ConnectedComponent {...this.props} />)
    }
  }
  function mapStateToProps(state){
    return { currentUser: state.user.userID, browserHistory: browserHistory }
  }
  return connect(mapStateToProps)(AuthorizedComponent)
}
