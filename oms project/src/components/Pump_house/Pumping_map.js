import React from 'react';
import Routers from "../sidebar/Routers"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Maps from './Maps';
import Bounce from 'react-reveal/Bounce';
const Pumping_map = () => {
  return <>
    <Routers />
    <Bounce>
      <h1 style={{textAlign:"center"}}><MyLocationIcon /> PUMP HOUSE</h1>
    </Bounce>

    <div className="main">
      <div className="container">
      <Maps />
      </div>
    </div>
  </>;
};
export default Pumping_map