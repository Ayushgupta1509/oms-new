import React from 'react';
import Maps from './Maps'
import './maps.css'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Routers from '../sidebar/Routers';
import Bounce from 'react-reveal/Bounce';

const Map = () => {
  return <>
    <Routers />
    
      <Bounce>
        <h1 style={{textAlign:'center'}}><MyLocationIcon />OMS</h1>
      </Bounce>
      <div className='main'>
      <div className='container'>
      <Maps />
      </div>
      </div>
  </>;
};
export default Map;
