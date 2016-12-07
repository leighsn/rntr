import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'


import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import LinkComponent from './LinkComponent'

class App extends Component {
  render() {
    return (
      <div>
        <h1><Link to='/' id='logo'>RNTR</Link></h1>
        <div className="container">
        <LinkComponent />
        {this.props.children}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
