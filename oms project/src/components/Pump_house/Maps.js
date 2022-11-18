import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import Polyline from './Polyline'
import { Link } from "react-router-dom"
class Maps extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null
    }
  }

  onMapLoaded (map, maps) {
    this.fitBounds(map, maps)

    this.setState({
      ...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  afterMapLoadChanges () {
    return (
      <div style={{display: 'none'}}>
        <Polyline
          map={this.state.map}
          maps={this.state.maps}
          markers={this.props.markers} />
      </div>
    )
  }

  render () {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyBZe6zfgKt1_ECwEnLXDcLGIEPeJ1uWKlI'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
         <Marker text={'RD7925'} lat={26.8912} lng={75.7745} />
        <Marker text={'RD8650'} lat={26.9019} lng={75.7747} />
        <Marker text={'RD1400'} lat={ 26.8743} lng={ 75.7656} />
        
        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
      </GoogleMap>
    )
  }
}

Maps.defaultProps = {
  markers: [
    {lat: 26.8912, lng: 75.7745},
    {lat: 26.9019, lng: 75.7747},
    {lat: 26.8743, lng:  75.7656},
  ],
  center: [26.88778, 75.797467],
  zoom: 4
}

export default Maps

