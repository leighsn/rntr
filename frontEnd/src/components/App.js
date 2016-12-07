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
      <div className="container">
        <h1><Link to='/' className='logo'>RNTR</Link></h1>
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
