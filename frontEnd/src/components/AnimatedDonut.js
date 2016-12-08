import React, { Component } from 'react';
import Gauge from 'svg-gauge'
import '../../public/animated_donut.css'


export default function() {

  // gauge1.setValueAnimated(9, 1);

    let gauge1 = Gauge(
      document.getElementById("gauge1"), {
        max: 10,
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        value: 0,
        label: function(value) {
          return Math.round(value) + " / " + this.max;
        }})

    return (
      <div> {gauge1} </div>
    );
}




