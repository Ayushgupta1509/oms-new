import React from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Maps from './Maps'
import Bounce from 'react-reveal/Bounce';
import Routers from "../sidebar/Routers"

const Amsmap = () => {
  return <>
       <Routers />
      <Bounce>
        <h1 style={{textAlign:"center"}}><MyLocationIcon /> AMS</h1>
      </Bounce>
      <div className="main">
 
      <div className="container">
      <Maps />
      </div>
    </div>
  </>;
};
export default Amsmap
