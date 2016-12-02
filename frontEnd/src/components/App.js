import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import LinkComponent from './LinkComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LinkComponent />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
