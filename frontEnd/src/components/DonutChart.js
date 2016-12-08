import React, { Component } from 'react';
import '../../public/donut.css'


export default class DonutChart extends Component {

  constructor(props){
    super(props)
  }

  render() {
    var color
    if (this.props.value < 4){
      color = '#FF4633'
    }
    else if (this.props.value < 6){
      color = '#FF8633'
    }
    else if (this.props.value < 8){
      color = '#33ECFF'
    }
    else {
      color = '#86FF33'
    }
    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 10);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval, stroke: color}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <svg width={this.props.size} height={this.props.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
        <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle', fill: color}} >
          <tspan className="donutchart-text-val">{this.props.value}</tspan>
          <tspan className="donutchart-text-percent">/10</tspan>
        </text>
      </svg>
    );
  }
}
