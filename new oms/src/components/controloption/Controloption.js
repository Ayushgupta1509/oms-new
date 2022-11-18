import React from 'react'
import './controloption.css'
import Routers from '../sidebar/Routers'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-material-symbols/valve'
import AdjustIcon from '@mui/icons-material/Adjust';
function controloption() {
    const percentage = 60;
    const value = 100;
  return (
    <div>
        <Routers/>
        <div className='dashboard'>

        <div class="card-group" id="hello">
  <div class="card mr-2 ml-2"  id="cardssecond">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Inlet Pressure</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    </div>   
  </div>

  <div class="card mr-2"  id="cardsthird">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Outlet Pressure</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
   
    </div>
  </div>

  <div class="card mr-2"  id="cardsfour">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Flow Rate</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    
    </div>
  </div>

  <div class="card mr-2"  id="cardsfive">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Cumulative Flow</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    
    </div>
  </div>

  <div class="card mr-2"  id="cardssix">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Daily Flow</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>

    </div>
  </div>

  <div class="card mr-2 ml-2" id="cardsfirst">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Previous Day Flow</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
  </div>
</div>



<div class="card-group mt-5">

  <div class="card mr-2 ml-2" id="maincardsfirst">
  <div class="card-header"  id="centers">
          OMS Details
            </div>
    <div class="card-body ">
        <div className='flexs'>
      <div className='widths'>
      <p>Owner Name</p>
    <h5>Utkarsh</h5>
      </div>
      <div className='widths'>
      <p>Owner Mobile</p>
    <h5>7686949359</h5>
      </div>
      <div className='widths'>
      <p>Village</p>
    <h5>chuck1</h5>
      </div>
      </div>

      <div className='flexs'>
      <div className='widths'>
      <p>Area</p>
    <h5>Utkarsh</h5>
      </div>
      <div className='widths'>
      <p>Logitude </p>
    <h5>76.1291</h5>
      </div>
      <div className='widths'>
      <p>Latitude </p>
    <h5>23.364774</h5>
      </div>
      </div>

<div className='flexs'>
      <div className='widths'>
      <p>Control Valve1</p>
    <h5>66666</h5>
      </div>
      <div className='widths'>
      <p>Control Valve2 </p>
    <h5>76.1291</h5>
      </div>
      <div className='width'>
      <p></p>
    <h5></h5>
      </div>
      </div>


    </div>
  </div>

  <div class="card mr-2"  id="maincardssecond">
  <div class="card-header"  id="centers">
          Parameters Details
            </div>
    <div class="card-body">
    <div className='flexs'>
      <div className='widths'>
      <p>Door Status</p>
      <p style={{color:"red"}}>Close</p>
      </div>
      <div className='widths'>
      <p>Scheduler Status</p>
      <p style={{color:"green"}}>Enable</p>
      </div>
      <div className='widths'>
      <p>Flow Control Status</p>
      <p style={{color:"green"}}>Enable</p>
      </div>
      </div>

      <div className='flexs'>
      <div className='widths'>
      <p>Pressure Control Status</p>
      <p style={{color:"red"}}>Disable</p>
      </div>
      <div className='widths'>
      <p>Controller Alarm</p>
      <p style={{color:"green"}}>Enable</p>
      </div>
      <div className='widths'>
      <p>Last Data Received Time</p>
    <h5>2022-11-12 17:07:13</h5>
      </div>
      </div>

      <div className='flexs'>
      <div className='widthss'>
      <p>Battery Voltage</p>
    <h5><CircularProgressbar value={value} text={`${value}%`} /></h5>
      </div>
      
      </div>
    </div>
  </div>

  <div class="card mr-2" id="maincardsthird">
  <div class="card-header"  id="centers">
          Valve Status and Valve Scheduler Status
            </div>
    <div class="card-body" id='para'>
  
    <table>
            <thead>
                <th >valve Status</th>
                <th >valve Scheduler</th>
                <th >Current Scheduler Time</th>
                <th >Next Scheduler Time </th>
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
  )
}

export default controloption