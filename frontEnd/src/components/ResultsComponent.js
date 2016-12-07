import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { Gauge, Donut, TextRenderer } from 'brexis.gauge.js';

class ResultsComponent extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.gauge().bind(this)
  }

  gauge(){
    let opts = {
      lines: 10, // The number of lines to draw
      angle: 0.35, // The length of each line
      lineWidth: 0.1, // The line thickness
      pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.035, // The rotation offset
        color: '#000000' // Fill color
      },
      limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
      colorStart: '#6F6EA0',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',   // to see which ones work best for you
      generateGradient: true
    };
    let score = this.props.apartment.apartment_score;
    let target = document.getElementById('gauge'); // your canvas element
    let gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.set(score); // set actual value
    gauge.maxValue = 10; // set max gauge value
    gauge.animationSpeed = 32;
    gauge.setTextField(score);
  }

  render() {

    return (
      <div>
      <h4> Report for: {this.props.apartment.apartment_address}</h4>

      <h2>Score: {this.props.apartment.apartment_score} <canvas id='gauge'></canvas></h2>

      <p>You rated ease of commute as {this.props.user.commute} out of 10</p>
      <p>The commute time from this apartment to your workplace is {this.props.apartment.data.distance_data} mins.</p>
      <p>You rated the importance of safety as {this.props.user.safety} out of 10</p>
      <p>Within the past year, there were {this.props.apartment.data.crime_data.felonies} felonies, {this.props.apartment.data.crime_data.misdemeanors} misdemeanors, and {this.props.apartment.data.crime_data.violations} violations reported near the apartment.</p>
      <p>You rated the importance of good schools as {this.props.user.schools} out of 10</p>
      <ul>
      <li>{this.props.apartment.data.school_data.a_schools} schools nearby were given a grade of 'A'</li>
      <li>{this.props.apartment.data.school_data.b_schools} schools nearby were given a grade of 'B'</li>
      <li>{this.props.apartment.data.school_data.c_schools} schools nearby were given a grade of 'C'</li>
      <li>{this.props.apartment.data.school_data.d_schools} schools nearby were given a grade of 'D'</li>
      <li>{this.props.apartment.data.school_data.a_schools} schools nearby were given a grade of 'F'</li>
      </ul>
      <p>You rated the importance of amenities as {this.props.user.ammenities} out of 10</p>
      <p>Yelp found {this.props.apartment.data.amenities_data.category_1.count} locations that matched the search term"{this.props.apartment.data.amenities_data.category_1.name}"</p>
      <p>Yelp found {this.props.apartment.data.amenities_data.category_2.count} locations that matched the search term"{this.props.apartment.data.amenities_data.category_2.name}"</p>
      <p>Yelp found {this.props.apartment.data.amenities_data.category_3.count} locations that matched the search term"{this.props.apartment.data.amenities_data.category_3.name}"</p>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ResultsComponent)
