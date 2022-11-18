import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class Marker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    fetch('http://meters.siotel.in:8005/geomap/site/').then(resp=>resp.json())
    .then(resp=>this.setState({posts:resp}))
  }
  render () {
    return (
      <>
        <div style={{fontSize: '16px' }}>
        {this.state.posts.map(post=>
  <Link to={`/controls/${post.site_id}`} style={{textDecoration:"None",color: 'white'}}>{this.props.text}</Link>
  )}
        </div>
       </>
    )
  }
}
