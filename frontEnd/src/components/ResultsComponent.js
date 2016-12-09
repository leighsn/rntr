import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'
import AnimatedDonut from './AnimatedDonut'
import SavedSearchesComponent from './SavedSearchesComponent'
import Gauge from 'svg-gauge'
import '../../public/animated_donut.css'

class ResultsComponent extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    if(!this.props.apartment.apartment_score){
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps(){
    if(!this.props.apartment.apartment_score){
      browserHistory.push('/')
    }
  }

  componentDidMount(){
     let gauge1 = Gauge(
      document.getElementById("gauge1"), {
        max: 10,
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        value: 0,
        label: function(value) {
          return Math.round(value) + " / " + this.max;
        }})
      gauge1.setValueAnimated(this.props.apartment.apartment_score, 1);


      let safety_gauge = Gauge(
      document.getElementById("safety_gauge"), {
        max: 10,
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        value: 0,
        label: function(value) {
          return Math.round(value) + " / " + this.max;
        }})
      safety_gauge.setValueAnimated(this.props.user.safety, 1);


      let commute_gauge = Gauge(
      document.getElementById("commute_gauge"), {
        max: 10,
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        value: 0,
        label: function(value) {
          return Math.round(value) + " / " + this.max;
        }})
      commute_gauge.setValueAnimated(this.props.user.commute, 1);


      let schools_gauge = Gauge(
      document.getElementById("schools_gauge"), {
        max: 10,
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        value: 0,
        label: function(value) {
          return Math.round(value) + " / " + this.max;
        }})
      schools_gauge.setValueAnimated(this.props.user.schools, 1);

      let amenities_gauge = Gauge(
      document.getElementById("amenities_gauge"), {
        max: 10,
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        value: 0,
        label: function(value) {
          return Math.round(value) + " / " + this.max;
        }})
      amenities_gauge.setValueAnimated(this.props.user.amenities, 1);
  }

  componentDidUpdate(){
    document.getElementById("gauge1").innerHTML = ""
    let gauge1 = Gauge(
      document.getElementById("gauge1"), {
         max: 10,
         dialStartAngle: -90,
         dialEndAngle: -90.001,
         value: 0,
         label: function(value) {
           return Math.round(value) + " / " + this.max;
         }
      }
    )
     gauge1.setValueAnimated(this.props.apartment.apartment_score, 1);

     document.getElementById("safety_gauge").innerHTML = "<p>Safety</p>"
     let safety_gauge = Gauge(
     document.getElementById("safety_gauge"), {
       max: 10,
       dialStartAngle: -90,
       dialEndAngle: -90.001,
       value: 0,
       label: function(value) {
         return Math.round(value) + " / " + this.max;
       }})
     safety_gauge.setValueAnimated(this.props.user.safety, 1);

     document.getElementById("commute_gauge").innerHTML = "<p>Commute</p>"
     let commute_gauge = Gauge(
     document.getElementById("commute_gauge"), {
       max: 10,
       dialStartAngle: -90,
       dialEndAngle: -90.001,
       value: 0,
       label: function(value) {
         return Math.round(value) + " / " + this.max;
       }})
     commute_gauge.setValueAnimated(this.props.user.commute, 1);

     document.getElementById("schools_gauge").innerHTML = "<p>Schools</p>"
     let schools_gauge = Gauge(
     document.getElementById("schools_gauge"), {
       max: 10,
       dialStartAngle: -90,
       dialEndAngle: -90.001,
       value: 0,
       label: function(value) {
         return Math.round(value) + " / " + this.max;
       }})
     schools_gauge.setValueAnimated(this.props.user.schools, 1);

     document.getElementById("amenities_gauge").innerHTML = "<p>Amenities</p>"
     let amenities_gauge = Gauge(
     document.getElementById("amenities_gauge"), {
       max: 10,
       dialStartAngle: -90,
       dialEndAngle: -90.001,
       value: 0,
       label: function(value) {
         return Math.round(value) + " / " + this.max;
       }})
     amenities_gauge.setValueAnimated(this.props.user.amenities, 1);
  }

  render() {
    return (
      <div id="results-padding">
        <div className="row">
          <center id="gauge1" className='six columns'></center>
          <div className="six columns">
            <h4>{this.props.apartment.address}</h4>
            <iframe width="450" height="250" frameborder="0" src={this.props.apartment.map}>
            </iframe>
          </div>
        </div>
        <br/>
        <p className="twelve columns">
          Within the past year, there were {this.props.apartment.data.crime_data.felonies} felonies, {this.props.apartment.data.crime_data.misdemeanors} misdemeanors, and {this.props.apartment.data.crime_data.violations} violations reported near the apartment.
          <p>The commute time from this apartment to your workplace is {this.props.apartment.data.distance_data} mins.</p>
        </p>
        <div className='row'><h4>Your Preferences:</h4></div>
        <div className='row'>
          <center>
            <div className = 'two columns' id="commute_gauge">
              <p>Commute</p>
            </div>
            <div className = 'two columns' id="safety_gauge">
              <p>Safety</p>
            </div>
            <div className = 'two columns'id="schools_gauge">
              <p>Schools</p>
            </div>
            <div className = 'two columns' id="amenities_gauge">
              <p>Amenities</p>
            </div>
          </center>
        </div>
        <div className="row">
          <div className="six columns">
            <h4>Breakdown of Results:</h4>
            <ul>
              <li>{this.props.apartment.data.school_data.a_schools} schools nearby were given a grade of 'A'</li>
              <li>{this.props.apartment.data.school_data.b_schools} schools nearby were given a grade of 'B'</li>
              <li>{this.props.apartment.data.school_data.c_schools} schools nearby were given a grade of 'C'</li>
              <li>{this.props.apartment.data.school_data.d_schools} schools nearby were given a grade of 'D'</li>
              <li>{this.props.apartment.data.school_data.a_schools} schools nearby were given a grade of 'F'</li>
              <li>Yelp found {this.props.apartment.data.amenities_data.category_1.count} locations that matched the search term "{this.props.apartment.data.amenities_data.category_1.name}"</li>
              <li>Yelp found {this.props.apartment.data.amenities_data.category_2.count} locations that matched the search term "{this.props.apartment.data.amenities_data.category_2.name}"</li>
              <li>Yelp found {this.props.apartment.data.amenities_data.category_3.count} locations that matched the search term "{this.props.apartment.data.amenities_data.category_3.name}"</li>
            </ul>
          </div>
          <SavedSearchesComponent />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ResultsComponent)
