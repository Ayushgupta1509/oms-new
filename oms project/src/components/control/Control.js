import React from 'react'
import Routers from '../sidebar/Routers'

import './control.css'

import { Link } from "react-router-dom"
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-material-symbols/valve'
import AdjustIcon from '@mui/icons-material/Adjust';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import AirIcon from '@mui/icons-material/Air';
import PersonIcon from '@mui/icons-material/Person';
function Control() {
  return (
    <div>
      <Routers />
     
    <div>
    <div className='pass' >

  <div className="col">
   <div className="card" id='car1'>
   <div className="card-body" id='cards' >
   <Link to='/'>  <h5 className="card-title text-muted">Owner Name</h5></Link>
        <span className="card-text"  id='span1'><PersonIcon/></span>
      </div>
      <div className='para'>
      <h4 className="card-text">Utkarsh</h4>
      </div>
    </div>

  </div>
  
  <div className="col">
    <div className="card"  id='car2'>
    <div className="card-body" id='cards' >
        <h5 className="card-title text-muted">Inlet Pressure</h5>
        <span className="card-text"  id='span2'><TireRepairIcon/></span>
      </div>
      <div className='para'>
      <h4 className="card-text">54 (bar)</h4>
      </div>
    </div>
  </div> 

  <div className="col" >
    <div className="card" id='car3'>
    <div className="card-body" id='cards' >
        <h5 className="card-title text-muted">Outlet Pressure </h5>
        <span className="card-text"  id='span3'><AirIcon/> </span>
      </div>
      <div className='para'>
      <h4 className="card-text">38 </h4>
      </div>
    </div>
  </div>


  <div className="col" >
    <div className="card" id='car4'>
    <div className="card-body" id='cards' >
        <h5 className="card-title text-muted">Battery Voltage</h5>
        <span className="card-text" id='span4'><BatteryChargingFullIcon/></span>
      </div>
      <div className='para'>
      <h4 className="card-text">12 (volts)</h4>
      </div>
    </div>
    </div>
 
  </div>
   
  
  <div className='passs' >

  <div className="col">
    <div className="card" id='car1'>
    <div className="card-body" id='cards' >
    <div class="card-header" id="centers">
    OMS Details
            </div>
       <hr></hr>
      </div>
      <div className='para'>
        <div className='firstflex'>
        <div className='classw'>
        <p>FLOW Rate</p>
        <h6>00000000</h6>
      </div>
      <div className='classw'>
        <p>Cumulative Flow</p>
        <h6>200</h6>
      </div>
      <div className='classw'>
        <p>Daily Flow</p>
        <h6>Enable</h6>
      </div>
      <div className='classw'>
        <p>Previous Day Flow</p>
        <h6>0</h6>
      </div>
        </div>
      <div className='firstflex'>
      <div className='classw'>
        <p>Door Status</p>
        <h6>Open</h6>
      </div>
      <div className='classw'>
        <p>Scheduler Status</p>
        <h6>Enable</h6>
      </div>
      <div className='classw'>
        <p>Controller Alarm</p>
        <h6> 6575</h6>
      </div>
      <div className='classw'>
        <p>Flow Control Status</p>
        <h6>Enable</h6>
      </div>
      </div>
      <div className='firstflex'>
      <div className='classw'>
        <p>Pressure Control Status</p>
        <h6>Enable</h6>
      </div>
      <div className='classw'>
        <p>Last Data Received Time</p>
        <h6>2022-11-12T17:07:13</h6>
      </div>
      <div className='classs'>
      
      </div>
      <div className='classs'>
       
      </div>
      </div>
    </div>
    </div>
    </div>
  
        {/* <div class="col">
        <div class="card mt-3 mr-5">
          <div class="card-body" >
          <div class="card-header text-center">
          Valve Status and Valve Scheduler Status
            </div>
          <table>
            <thead>
                <th>valve Status</th>
                <th>valve Scheduler</th>
            </thead>
            <tbody>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td><AdjustIcon className='location'/></td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td><AdjustIcon className='location'/></td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td><AdjustIcon  className='location'/></td>
                </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div> */}
      <div className="col">
    <div className="card"  id='car2'>
    <div className="card-body" id='cards' >
        <div class="card-header"  id="centers">
          Valve Status and Valve Scheduler Status
            </div>
       
      </div>
      <div className='para'>
      <table>
            <thead>
                <th>valve Status</th>
                <th>valve Scheduler</th>
                <th>Current Scheduler Time</th>
                <th>Next Scheduler Time </th>
            </thead>
            <tbody>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td><AdjustIcon className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td><AdjustIcon className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td ><AdjustIcon className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td><Icon icon={locationIcon} className="location-icon" /></td>
                <td><AdjustIcon  className='location'/></td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div> 
      </div>
      

 </div>

    </div>
  )

  }
export default Control