import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';


import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import LinkComponent from './LinkComponent'

class App extends Component {
  render() {
    return (
      <div class="container">
        <row>
        <div class="one columns">
        <h1>RNTR</h1>
        </div>
        <LinkComponent class="ten columns" />
        {this.props.children}
        </row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
