import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'
import DonutChart from './DonutChart'



class ResultsComponent extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    if(!this.props.apartment.apartment_score){
      browserHistory.push('search')
    }
  }

  componentWillReceiveProps(){
    if(!this.props.apartment.apartment_score){
      browserHistory.push('search')
    }
  }


  render() {

    return (
      <div>
      <h4>{this.props.apartment.address}</h4>

      <h2>Score: <DonutChart value={this.props.apartment.apartment_score} size='116' strokewidth='26'/></h2>
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

      <div className = 'two columns'>
      <DonutChart value={this.props.user.commute} size='80' strokewidth='16'/>
      <p>Commute</p>
      </div>
      <div className = 'two columns'>
      <DonutChart value={this.props.user.safety} size='80' strokewidth='16'/>
      <p>Safety</p>
      </div>
      <div className = 'two columns'>
      <DonutChart value={this.props.user.schools} size='80' strokewidth='16'/>
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
