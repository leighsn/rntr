import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'
import DonutChart from './DonutChart'
import AnimatedDonut from './AnimatedDonut'
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
  }




  render() {

    return (
      <div>

        <div id="gauge1"></div>

      <h4>{this.props.apartment.address}</h4>

      <h2>Score: <DonutChart color='orange' value={this.props.apartment.apartment_score} size='116' strokewidth='26'/></h2>
      <p>The commute time from this apartment to your workplace is {this.props.apartment.data.distance_data} mins.</p>
      <p>Within the past year, there were {this.props.apartment.data.crime_data.felonies} felonies, {this.props.apartment.data.crime_data.misdemeanors} misdemeanors, and {this.props.apartment.data.crime_data.violations} violations reported near the apartment.</p>
      <ul>
      <li>{this.props.apartment.data.school_data.a_schools} schools nearby were given a grade of 'A'</li>
      <li>{this.props.apartment.data.school_data.b_schools} schools nearby were given a grade of 'B'</li>
      <li>{this.props.apartment.data.school_data.c_schools} schools nearby were given a grade of 'C'</li>
      <li>{this.props.apartment.data.school_data.d_schools} schools nearby were given a grade of 'D'</li>
      <li>{this.props.apartment.data.school_data.a_schools} schools nearby were given a grade of 'F'</li>
      </ul>
      <p>Yelp found {this.props.apartment.data.amenities_data.category_1.count} locations that matched the search term "{this.props.apartment.data.amenities_data.category_1.name}"</p>
      <p>Yelp found {this.props.apartment.data.amenities_data.category_2.count} locations that matched the search term "{this.props.apartment.data.amenities_data.category_2.name}"</p>
      <p>Yelp found {this.props.apartment.data.amenities_data.category_3.count} locations that matched the search term "{this.props.apartment.data.amenities_data.category_3.name}"</p>
      <p>Your Preferences:</p>
      <div className='row'>

      <div className = 'two columns' id="commute_gauge">
      <p>Commute</p>
      </div>


      <div className = 'two columns' id="safety_gauge">
      <p>Safety</p>
      </div>


      <div className = 'two columns'id="schools_gauge"> 
      <p>Schools</p>
      </div>
      <div className = 'two columns'>
      <DonutChart value={this.props.user.amenities} size='80' strokewidth='16'/>
      <p>Amenities</p>
      </div>

      </div>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ResultsComponent)
