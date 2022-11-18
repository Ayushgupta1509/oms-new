import React, { Component } from 'react'
import './ams.css'
export default class Marker extends Component {
  render () {
    return (
      <div style={{fontSize: '16px'}}>
      <i class="bi-pin-angle" id="icons">  </i> <span style={{forntSize:"4rem", color: 'white'}}>{this.props.text}</span>
      </div>
    )
  }
}
