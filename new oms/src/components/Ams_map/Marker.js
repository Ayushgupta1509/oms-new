import React, { Component } from 'react'
import './ams.css'
import { Link } from "react-router-dom"
export default class Marker extends Component {
  render () {
    return (
      <div style={{fontSize: '16px' }}>
<Link to='/control' style={{textDecoration:"None",color: 'white'}}>{this.props.text}</Link>
      </div>
    )
  }
}
