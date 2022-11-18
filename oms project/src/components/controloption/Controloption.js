import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import './controloption.css'
import Routers from '../sidebar/Routers'
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-material-symbols/valve'
import AdjustIcon from '@mui/icons-material/Adjust';
function Controloption() {
  const [data, setData] = useState([])
  const { site_id } = useParams();
    const percentage = 60;
 
    useEffect(() => {
      fetch(`http://meters.siotel.in:8005/geomap/site/${site_id}`).then((result)=>{
          result.json().then((resp)=>{
          console.warn("result",resp)
            setData(resp)
          })
        })
    }, [])
    console.warn(data)

    

  
  return (
    <div>
        <Routers/>
        { 
      data.map((item)=>
        <div className='dashboard'>
     
        <div class="card-group" id="hello">
  <div class="card mr-2 ml-2"  id="cardssecond">
  <div class="card-body">
    <div class="card-body" id="flexs" >
        <div><h5 className="card-title">Inlet Pressure</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    <div><h4 className="card-title" style={{color:"white" ,paddingLeft:"2rem"}}>{item.Inlet_p} (bar)</h4></div>
    </div>
  </div>

  <div class="card mr-2"  id="cardsthird">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Outlet Pressure</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    <div><h4 className="card-title" style={{color:"white" ,paddingLeft:"2rem"}}>{item.Outlet_p} (bar)</h4></div>
    </div>
  </div>

  <div class="card mr-2"  id="cardsfour">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Flow Rate</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    <div><h4 className="card-title" style={{color:"white" ,paddingLeft:"2rem"}}>{item.Flow_rate}</h4></div>
    </div>
  </div>

  <div class="card mr-2"  id="cardsfive">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Cumulative Flow</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    <div><h4 className="card-title" style={{color:"white" ,paddingLeft:"2rem"}}>{item.Cumulative_flow}</h4></div>
    </div>
  </div>

  <div class="card mr-2"  id="cardssix">
    <div class="card-body">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Daily Flow</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    <div><h4 className="card-title" style={{color:"white" ,paddingLeft:"2rem"}}>{item.Daily_flow}</h4></div>
    </div>
  </div>

  <div class="card mr-2 ml-2" id="cardsfirst">
    <div class="card-body" id="flexs">
        <div><h5 className="card-title">Previous Day Flow</h5></div>
        <div> <span className="card-text"  id='spans1'><CircularProgressbar value={percentage} text={`${percentage}`} /></span></div>
    </div>
    <div><h4 className="card-title" style={{color:"white" ,paddingLeft:"2rem"}}>{item.Previous_flow}</h4></div>
  </div>
</div>



<div class="card-group mt-4">

  <div class="card mr-2 ml-2" id="maincardsfirst">
  <div class="card-header"  id="centers">
          OMS Details
            </div>
    <div class="card-body ">
    <table className='tab'>
      <tbody className='tabs' >
      <tr >
          <th className='tab1'>Owner Name</th>
        <th className='tab2'>{item.owner}</th>
        </tr>
        <tr>
          <th className='tab1'>Owner Mobile</th>
        <th className='tab2'>8795456789</th>
        </tr>
        <tr>
          <th className='tab1'>Village</th>
        <th className='tab2'>{item.chuck}</th>
        </tr>
        <tr>
          <th className='tab1'>Area</th>
        <th className='tab2'>{item.area}</th>
        </tr>
        <tr>
          <th className='tab1'>Logitude</th>
        <th className='tab2'>{item.long}</th>
        </tr>
        <tr>
          <th className='tab1'>Latitude</th>
        <th className='tab2'>{item.lat}</th>
        </tr>
        <tr>
          <th className='tab1'>Control Valve1</th>
        <th className='tab2'>{item.Control_Valve_1_ON=='Open' ? <th style={{color:"green"}}>{item.Control_Valve_1_ON}</th> : <th style={{color:"red"}}>{item.Control_Valve_1_ON}</th>}</th>
        </tr>
        <tr>
          <th className='tab1'>Control Valve2</th>
        <th className='tab2'>{item.Control_Valve_2_ON=='Open' ? <th style={{color:"green"}}>{item.Control_Valve_2_ON}</th> : <th style={{color:"red"}}>{item.Control_Valve_2_ON}</th>}</th>
        </tr>
        <tr>
          <th className='tab1'>Farmer Details</th>
        <th style={{float:"right"}}> <Link to={`/farmer/${item.site_id}`} > <button class="btn btn-secondary">Farmer Details</button></Link></th>
        </tr>
        <tr>
          <th className='tab1'>Control</th>
           <th style={{float:"right"}} ><button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Control</button></th>
        </tr>
        </tbody>
    </table>

     




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
      <p>{item.Door_Open_Status=='Open' ? <p style={{color:"green"}}>{item.Door_Open_Status}</p> : <p style={{color:"red"}}>{item.Door_Open_Status}</p>}</p>
      </div>
      <div className='widths'>
      <p>Scheduler Status</p>
      <p>{item.Scheduler_OFF=='Enable' ? <p style={{color:"green"}}>{item.Scheduler_OFF}</p> : <p style={{color:"red"}}>{item.Scheduler_OFF}</p>}</p>
      </div>
      <div className='widths'>
      <p>Flow Control Status</p>
      <p>{item.Flow_Control_OFF=='Enable' ? <p style={{color:"green"}}>{item.Flow_Control_OFF}</p> : <p style={{color:"red"}}>{item.Flow_Control_OFF}</p>}</p>
      </div>
      </div>

      <div className='flexs'>
      <div className='widths'>
      <p>Pressure Control Status</p>
      <p>{item.Pressure_Control_OFF=='Enable' ? <p style={{color:"green"}}>{item.Pressure_Control_OFF}</p> : <p style={{color:"red"}}>{item.Pressure_Control_OFF}</p>}</p>
      </div>
      <div className='widths'>
      <p>Controller Alarm</p>
      <p>{item.Controlle_Alarms=='Enable' ? <p style={{color:"green"}}>{item.Controlle_Alarms}</p> : <p style={{color:"red"}}>{item.Controlle_Alarms}</p>}</p>
      </div>
      <div className='widths'>
      <p>Last Data Received Time</p>
    <p>{item.Date_time}</p>
      </div>
      </div>

      <div className='flexs'>
      <div className='widthss'>
      <p>Battery Voltage</p>
    <h5><CircularProgressbar value={item.Battery_voltage} text={`${item.Battery_voltage}volts`} /></h5>
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
                <th >valve No.</th>
                <th >valve Status</th>
                <th >valve Scheduler</th>
                <th >Current Scheduler Time</th>
                <th >Next Scheduler Time </th>
            </thead>
        
            <tbody>
                <tr>
                 <td> <Link to={`/Farmer_details/${item.site_id}`} >1</Link></td>
                <td>{item.Valve1=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td >{item.Valve_1_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
               
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td>2</td>
                <td>{item.Valve2=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td >{item.Valve_2_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td>3</td>
                <td>{item.Valve3=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td >{item.Valve_3_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td>4</td>
                <td>{item.Valve4=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td >{item.Valve_4_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td>5</td>
                <td>{item.Valve5=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td>{item.Valve_5_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td>6</td>
                <td>{item.Valve6=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td>{item.Valve_6_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td>7</td>
                <td>{item.Valve7=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td >{item.Valve_7_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
                <tr>
                <td>8</td>
                <td>{item.Valve8=='on' ? <td ><Icon icon={locationIcon} className="location-icons" /></td> : <td ><Icon icon={locationIcon} className="location-iconss" /></td>}</td>
                <td>{item.Valve_8_Scheduler=='Enable' ? <td ><AdjustIcon  className='locations'/></td> : <td ><AdjustIcon  className='locationss'/></td>}</td>
                <td >2022-11-12T17:07:13</td>
                <td >2022-11-12T17:07:13</td>
                </tr>
            </tbody>
              </table>
    </div>
    
  </div>
</div>





<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Schedule Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
<Link to={`/controllers/${item.site_id}`}>  <button type="button" class="btn btn-warning mr-3">Valve Control</button></Link>
  <button type="button" class="btn btn-warning mr-3">Set Schedule</button>
  <button type="button" class="btn btn-warning">Set Parameters</button>
</div>
      </div>
    </div>
  </div>
</div>



        </div> 
        )}

    </div>
  )
}

export default Controloption