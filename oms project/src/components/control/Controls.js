//  import React, { useState,useEffect } from 'react'
// import Routers from '../sidebar/Routers'
// import './controls.css'
// import { useParams } from "react-router-dom";
// function Controls() {
//     const [data, setData] = useState([])
//     const { site_id } = useParams();
//   useEffect(() => {
//     fetch(`http://meters.siotel.in:8005/geomap/site/${site_id}`).then((result)=>{
//         result.json().then((resp)=>{
//         console.warn("result",resp)
//           setData(resp)
//         })
//       })
//   }, [])
//   console.warn(data)
//     return (
//         <div>
//             <Routers />
//             <div class="row row-cols-1 row-cols-md-2 g-4">
//   <div class="col  text-center">
//     <div class="card mt-3 ml-5">
//     <div class="card-header text-center">
//     OMS Details
//   </div>
//       <div class="card-body">
//       { 
//       data.map((item)=>
//       <table class="table table-success table-striped card-text text-center" align="center" id='table'>
//             <tbody>
//                     <tr>
//                 <td>Site ID :- </td>
//                    <td>{item.site_id}</td>
//                     </tr>
//                     <tr>
//                      <td>Owner Name :- </td>
//                 <td>{item.owner}</td>
//                     </tr>
//                     <tr>
//                     <td>Village :- </td>
//                    <td>{item.chuck}</td>
//                     </tr>
//                     <tr>
//                     <td>Area :- </td>
//                     <td>{item.area}</td>
//                     </tr>
//                     <tr>
//                      <td>Logitude :- </td>
//                    <td>{item.long}</td>
//                     </tr>
//                     <tr>
//                      <td>Latitude :- </td>
//                     <td>{item.lat}</td>
//                     </tr>
//             </tbody>
//         </table>
//       )} 
//       </div>
//     </div>
//   </div>

//   <div class="col">
//     <div class="card mt-3 mr-5">
//     <div class="card-header text-center">
//     Valve Schedule Status
//   </div>
//       <div class="card-body">
//       { 
//       data.map((item)=>
//       <table class="table table-success table-striped card-text text-center" align="center" id='table'>
//             <tbody>
//                     <tr>
//                 <td>Valve1 :- </td>
//                    <td>{item.Valve1}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve2:- </td>
//                 <td>{item.Valve2}</td>
//                     </tr>
//                     <tr>
//                     <td>Valve3 :- </td>
//                    <td>{item.Valve3}</td>
//                     </tr>
//                     <tr>
//                     <td>Valve4 :- </td>
//                     <td>{item.Valve4}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve 5 :- </td>
//                    <td>{item.Valve5}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve6 :- </td>
//                     <td>{item.Valve6}</td>
//                     </tr>
//                     <tr>
//                     <td>Valve7 :- </td>
//                    <td>{item.Valve7}</td>
//                     </tr>
//                     <tr>
//                     <td>Valve8 :- </td>
//                     <td>{item.Valve8}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve 1 Scheduler :- </td>
//                    <td>{item.Valve_1_Scheduler}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve 2 Scheduler  :- </td>
//                     <td>{item.Valve_2_Scheduler}</td>
//                     </tr>
//                     <tr>
//                     <td>Valve 3 Scheduler  :- </td>
//                     <td>{item.Valve_3_Scheduler}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve 4 Scheduler  :- </td>
//                    <td>{item.Valve_4_Scheduler}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve 5 Scheduler  :- </td>
//                     <td>{item.Valve_5_Scheduler}</td>
//                     </tr>
//                     <tr>
//                     <td>Valve 6 Scheduler :- </td>
//                    <td>{item.Valve_6_Scheduler}</td>
//                     </tr>
//                     <tr>
//                     <td>Valve 7 Scheduler  :- </td>
//                     <td>{item.Valve_7_Scheduler}</td>
//                     </tr>
//                     <tr>
//                      <td>Valve 8 Scheduler :- </td>
//                    <td>{item.Valve_8_Scheduler}</td>
//                     </tr>

//             </tbody>
//         </table>
//       )} 
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card text-center ml-5 mr-5 mt-3" >
//   <div class="card-header ">
//     Parameters Details
//   </div>
//   <div class="card-body">
//   { 
//       data.map((item)=>
//       <table class="table table-success table-striped card-text text-center" align="center" id='table'>
//             <tbody>
//                     <tr>
//                 <td>Inlet Pressure :- </td>
//                    <td >{item.Inlet_p}</td>
//                    <td className='classes'>Flow Rate :- </td>
//                    <td>{item.Flow_rate}</td>
//                     </tr>
//                     <tr>
//                 <td>Cumulative Flow:- </td>
//                    <td>{item.Cumulative_flow}</td>
//                    <td className='classes'>Battery Voltage :- </td>
//                    <td>{item.Battery_voltage}</td>
//                     </tr>

//                     <tr>
//                 <td>Daily Flow:- </td>
//                    <td>{item.Daily_flow}</td>
//                    <td className='classes'>Previous Flow :- </td>
//                    <td>{item.Previous_flow}</td>
//                     </tr>
//                     <tr>
//                 <td>Control Valve 1 ON:- </td>
//                    <td>{item.Control_Valve_1_ON}</td>
//                    <td className='classes'>Control Valve 2 ON :- </td>
//                    <td>{item.Control_Valve_2_ON}</td>
//                     </tr>
//                     <tr>
//                 <td>Door Open Status:- </td>
//                    <td>{item.Door_Open_Status}</td>
//                    <td className='classes'>Scheduler OFF :- </td>
//                    <td>{item.Scheduler_OFF}</td>
//                     </tr>
//                     <tr>
//                 <td>Pressure_Control_OFF:- </td>
//                    <td>{item.Pressure_Control_OFF}</td>
//                    <td className='classes'>Controle_Alarms OFF :- </td>
//                    <td>{item.Controlle_Alarms}</td>
//                     </tr>
//                     <tr>
//                 <td>Flow_Control_OFF:- </td>
//                    <td>{item.Flow_Control_OFF}</td>
//                    <td className='classes'>SDC_Failure :- </td>
//                    <td>{item.SDC_Failure}</td>
//                     </tr>
//                     <tr>
//                 <td>FLASH_Failure:- </td>
//                    <td>{item.FLASH_Failure}</td>
//                    <td className='classes'>FRAM_Failure :- </td>
//                    <td>{item.FRAM_Failure}</td>
//                     </tr>
//                     <tr>
//                 <td>RTC_Failure:- </td>
//                    <td>{item.RTC_Failure}</td>
//                    <td className='classes'>Parameters_Configured :- </td>
//                    <td>{item.Parameters_Configured}</td>
//                     </tr>
//                     <tr>
//                 <td>Scheduler_Configured:- </td>
//                    <td>{item.Scheduler_Configured}</td>
//                    <td className='classes'>ADC_Configured :- </td>
//                    <td>{item.ADC_Configured}</td>
//                     </tr>
//                     <tr>
//                 <td>Start_Date_configured:- </td>
//                    <td>{item.Start_Date_configured}</td>
//                    <td className='classes'>No_of_Valves :- </td>
//                    <td>{item.No_of_Valves}</td>
//                     </tr>
//                     <tr>
//                 <td>TBD:- </td>
//                    <td>{item.TBD}</td>
//                    <td className='classes'>Enable_Scheduler :- </td>
//                    <td>{item.Enable_Scheduler}</td>
//                     </tr>
//                     <tr>
//                 <td>Enable_Acknowledgement:- </td>
//                    <td>{item.Enable_Acknowledgement}</td>
//                    <td className='classes'>Enable_Flow_Control :- </td>
//                    <td>{item.Enable_Flow_Control}</td>
//                     </tr>
//                     <tr>
//                 <td>Scheduler_Type:- </td>
//                    <td>{item.Scheduler_Type}</td>
//                    <td className='classes'>Pressure_Control_type :- </td>
//                    <td>{item.Pressure_Control_type}</td>
//                     </tr>
//                     <tr>
//                 <td>Periodic_data_interval:- </td>
//                    <td>{item.Periodic_data_interval}</td>
//                    <td className='classes'>Desired_Pressure :- </td>
//                    <td>{item.Desired_Pressure}</td>
//                     </tr>
//                     <tr>
//                 <td>Allowed_span_for_pressure:- </td>
//                    <td>{item.Allowed_span_for_pressure}</td>
//                    <td className='classes'>Desired_Flow_rate :- </td>
//                    <td>{item.Desired_Pressure}</td>
//                     </tr>
//                     <tr>
//                 <td>Allowed_span_for_flow_rate:- </td>
//                    <td>{item.Allowed_span_for_flow_rate}</td>
//                    <td className='classes'>Logging_OFF :- </td>
//                    <td >{item.Logging_OFF}</td>
//                     </tr>
//                    <tr >
//                 <td>Date_time:- </td>
//                    <td>{item.Date_time}</td>

//                     </tr>
//             </tbody>
//         </table>
//       )} 
//   </div>

// </div>
//         </div>
//     )
// }

// export default Controls
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import React, { useState,useEffect } from 'react'
import Routers from '../sidebar/Routers'
import './controls.css'
function Control() {
  const [data, setData] = useState([])
    const { site_id } = useParams();
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
      <Routers />
      { 
      data.map((item)=>
    <div>
    
   
      <h3 style={{textAlign:"center"}}>{item.site_id}</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col  text-center">
          <div class="card mt-3 ml-5">
            <div class="card-header text-center">
              OMS Details
            </div>
            <div class="card-body">
           <div className='firstdiv'>
            <h6 className='class1'>Owner Mobile  :-</h6>
            <h6 className='class2'>7686897453</h6>
            <h6 className='class3'>Village :-</h6>
            <h6 className='class4'>{item.chuck}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>Owner Name :-</h6>
            <h6 className='class2'>{item.owner}</h6>
            <h6 className='class3'>Area :-</h6>
            <h6 className='class4'>{item.area}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>Logitude :-</h6>
            <h6 className='class2'>{item.long}</h6>
            <h6 className='class3'>Latitude :-</h6>
            <h6 className='class4'>{item.lat}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>Control Valve 1:-</h6>
            <h6 className='class2'>{item.Control_Valve_1_ON=="Close" ?  <h6 style={{color:"red"}}>{item.Control_Valve_1_ON}</h6> : <h6 style={{color:"green"}}>{item.Control_Valve_1_ON}</h6>}</h6>
            <h6 className='class3'>Control Valve 2:-</h6>
            <h6 className='class4'>{item.Control_Valve_2_ON=="Close" ?  <h6 style={{color:"red"}}>{item.Control_Valve_2_ON}</h6> : <h6 style={{color:"green"}}>{item.Control_Valve_2_ON}</h6>}</h6>
           </div>
            </div>
          </div>
          <div className="firstdivs">
         <Link to={`/farmer/${item.site_id}`}  style={{width:"9rem",width:"25%"}}><button type="button" class="btn btn-info mt-3">Farmer Details</button></Link> 
         <Link to={`/scheduler/${item.site_id}`}  style={{width:"9rem",width:"25%"}}>  <button type="button" class="btn btn-info mt-3" >Scheduler Time</button></Link> 
         <Link to={`/controller/${item.site_id} `} style={{width:"9rem",width:"25%"}}> <button type="button" class="btn btn-info mt-3" >Controller</button></Link> 
          </div>
        </div>
       
         
        <div class="col">
        <div class="card mt-3 mr-5">
          <div class="card-header text-center">
            Valve Status and Valve Scheduler Status
          </div>
          <div class="card-body">
          <div className='firstdiv'>
            <h6 className='class1'>Valve 1 :-</h6>
            <h6 className='class2'>{item.Valve1=="off" ?  <h6 style={{color:"red"}}>{item.Valve1}</h6> : <h6 style={{color:"green"}}>{item.Valve1}</h6>}</h6>
            <h6 className='class3'>Valve 1 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_1_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_1_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_1_Scheduler}</h6>}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>valve 2 :-</h6>
            <h6 className='class2'>{item.Valve2=="Close" ?  <h6 style={{color:"red"}}>{item.Valve2}</h6> : <h6 style={{color:"green"}}>{item.Valve2}</h6>}</h6>
            <h6 className='class3'>valve 2 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_2_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_2_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_2_Scheduler}</h6>}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>Valve 3 :-</h6>
            <h6 className='class2'>{item.Valve3=="Close" ?  <h6 style={{color:"red"}}>{item.Valve3}</h6> : <h6 style={{color:"green"}}>{item.Valve3}</h6>}</h6>
            <h6 className='class3'>valve 3 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_3_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_3_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_3_Scheduler}</h6>}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>valve 4 :-</h6>
            <h6 className='class2'>{item.Valve4=="Close" ?  <h6 style={{color:"red"}}>{item.Valve4}</h6> : <h6 style={{color:"green"}}>{item.Valve4}</h6>}</h6>
            <h6 className='class3'>valve 4 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_4_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_4_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_4_Scheduler}</h6>}</h6>
           </div>

           <div className='firstdiv'>
            <h6 className='class1'>Valve 5  :-</h6>
            <h6 className='class2'>{item.Valve5=="Close" ?  <h6 style={{color:"red"}}>{item.Valve5}</h6> : <h6 style={{color:"green"}}>{item.Valve5}</h6>}</h6>
            <h6 className='class3'>Valve 5 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_5_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_5_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_5_Scheduler}</h6>}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>valve 6 :-</h6>
            <h6 className='class2'>{item.Valve6=="Close" ?  <h6 style={{color:"red"}}>{item.Valve6}</h6> : <h6 style={{color:"green"}}>{item.Valve6}</h6>}</h6>
            <h6 className='class3'>valve 6 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_6_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_6_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_6_Scheduler}</h6>}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>Valve 7 :-</h6>
            <h6 className='class2'>{item.Valve7=="Close" ?  <h6 style={{color:"red"}}>{item.Valve7}</h6> : <h6 style={{color:"green"}}>{item.Valve7}</h6>}</h6>
            <h6 className='class3'>valve 7 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_7_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_7_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_7_Scheduler}</h6>}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class1'>valve 8 :-</h6>
            <h6 className='class2'>{item.Valve8=="Close" ?  <h6 style={{color:"red"}}>{item.Valve8}</h6> : <h6 style={{color:"green"}}>{item.Valve8}</h6>}</h6>
            <h6 className='class3'>valve 8 Scheduler :-</h6>
            <h6 className='class4'>{item.Valve_8_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_8_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_8_Scheduler}</h6>}</h6>
           </div>
          </div>
        </div>
      </div>
      
      </div>

      
      {/* <div class="card text-center ml-5 mr-5 mt-3" >
        <div class="card-header ">
          Parameters Details
        </div>
        <div class="card-body">
        <div className='firstdiv'>
            <h6 className='class5' >Inlet Pressure :-</h6>
            <h6 className='class6' >{item.Inlet_p} bar</h6>
            <h6 className='class7' >Cumulative Flow :-</h6>
            <h6 className='class8' >{item.Cumulative_flow} liter</h6>
            <h6 className='class9' >Daily Flow :-</h6>
            <h6 className='class10'>{item.Daily_flow}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Desired_Flow_rate:-</h6>
            <h6 className='class6' >{item.Desired_Flow_rate}</h6>
            <h6 className='class7' >Door Open Status:-</h6>
            <h6 className='class8' >{item.Door_Open_Status}</h6>
            <h6 className='class9' >Pressure_Control_OFF:-</h6>
            <h6 className='class10'>{item.Pressure_Control_OFF}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Flow_Control_OFF :-</h6>
            <h6 className='class6' >{item.Flow_Control_OFF}</h6>
            <h6 className='class7' >FLASH_Failure :-</h6>
            <h6 className='class8' >{item.FLASH_Failure}</h6>
            <h6 className='class9' >RTC_Failure :-</h6>
            <h6 className='class10'>{item.RTC_Failure}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Scheduler_Configured :-</h6>
            <h6 className='class6' >{item.Scheduler_Configured}</h6>
            <h6 className='class7' >Start_Date_configured:-</h6>
            <h6 className='class8' >{item.Start_Date_configured}</h6>
            <h6 className='class9' >TBD:-</h6>
            <h6 className='class10'>{item.TBD}</h6>
           </div>

           <div className='firstdiv'>
            <h6 className='class5' >Enable_Acknowledgement :-</h6>
            <h6 className='class6' >{item.Enable_Acknowledgement}</h6>
            <h6 className='class7' >Scheduler_Type:-</h6>
            <h6 className='class8' >{item.Scheduler_Type}</h6>
            <h6 className='class9' >Periodic_data_interval:-</h6>
            <h6 className='class10'>{item.Periodic_data_interval}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Allowed_span_for_pressure :-</h6>
            <h6 className='class6' >{item.Allowed_span_for_pressure}</h6>
            <h6 className='class7' >Allowed_span_for_flow_rate:-</h6>
            <h6 className='class8' >{item.Allowed_span_for_flow_rate}</h6>
            <h6 className='class9' >Last Data Received Time :-</h6>
            <h6 className='class10'>{item.Date_time}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Flow Rate :-</h6>
            <h6 className='class6' >{item.Flow_rate}</h6>
            <h6 className='class7' >Battery Voltage :-</h6>
            <h6 className='class8' >{item.Battery_voltage}</h6>
            <h6 className='class9' >Previous Flow :-</h6>
            <h6 className='class10'>{item.Previous_flow}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Logging_OFF :-</h6>
            <h6 className='class6' >{item.Logging_OFF}</h6>
            <h6 className='class7' >Scheduler OFF :-</h6>
            <h6 className='class8' >{item.Scheduler_OFF}</h6>
            <h6 className='class9' >	Controle_Alarms :-</h6>
            <h6 className='class10'>{item.Controlle_Alarms}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >SDC_Failure :-</h6>
            <h6 className='class6' >{item.SDC_Failure}</h6>
            <h6 className='class7' >FRAM_Failure :-</h6>
            <h6 className='class8' >{item.FRAM_Failure}</h6>
            <h6 className='class9' >Parameters_Configured :-</h6>
            <h6 className='class10'>{item.Parameters_Configured}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >ADC_Configured  :-</h6>
            <h6 className='class6' >{item.ADC_Configured}</h6>
            <h6 className='class7' >No_of_Valves :-</h6>
            <h6 className='class8' >{item.No_of_Valves}</h6>
            <h6 className='class9' >Enable_Scheduler  :-</h6>
            <h6 className='class10'>{item.Enable_Scheduler}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Enable_Flow_Control  :-</h6>
            <h6 className='class6' >{item.Enable_Flow_Control}</h6>
            <h6 className='class7' >Pressure_Control_type :-</h6>
            <h6 className='class8' >{item.Pressure_Control_type}</h6>
            <h6 className='class9' >Desired_Pressure  :-</h6>
            <h6 className='class10'>{item.Desired_Flow_rate}</h6>
           </div>
           
        </div>
 </div> */}
 <div class="card text-center ml-5 mr-5 mt-3" >
        <div class="card-header ">
          Parameters Details
        </div>
        <div class="card-body">
        <div className='firstdiv'>
            <h6 className='class5' >Last Data Received Time :-</h6>
            <h6 className='class6' >{item.Date_time} (bar)</h6>
            <h6 className='class7' >Inlet Pressure:-</h6>
            <h6 className='class8' >{item.Inlet_p} (liter)</h6>
            <h6 className='class9' >Outlet Pressure :-</h6>
            <h6 className='class10'>{item.Outlet_p}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Flow Rate:-</h6>
            <h6 className='class6' >{item.Flow_rate}</h6>
            <h6 className='class7' >Cumulative Flow:-</h6>
            <h6 className='class8' >{item.Cumulative_flow}</h6>
            <h6 className='class9' >Input/Battery Voltage:-</h6>
            <h6 className='class10'>{item.Battery_voltage}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Daily Flow:-</h6>
            <h6 className='class6' >{item.Flow_Control_OFF}</h6>
            <h6 className='class7' >Previous Day Flow :-</h6>
            <h6 className='class8' >{item.Previous_flow}</h6>
            <h6 className='class9' >Door Status :-</h6>
            <h6 className='class10'>{item.Door_Open_Status=="Close" ?  <h6 style={{color:"red"}}>{item.Door_Open_Status}</h6> : <h6 style={{color:"green"}}>{item.Door_Open_Status}</h6>}</h6>
           </div>
           <div className='firstdiv'>
            <h6 className='class5' >Scheduler Status:-</h6>
            <h6 className='class6' >{item.Scheduler_OFF=="OFF" ?  <h6 style={{color:"red"}}>{item.Scheduler_OFF}</h6> : <h6 style={{color:"green"}}>{item.Scheduler_OFF}</h6>}</h6>
            <h6 className='class7' >Controller Alarm:-</h6>
            <h6 className='class8' >{item.Controlle_Alarms=="Disabled" ?  <h6 style={{color:"red"}}>{item.Controlle_Alarms}</h6> : <h6 style={{color:"green"}}>{item.Controlle_Alarms}</h6>}</h6>
            <h6 className='class9' >Flow Control Status:-</h6>
            <h6 className='class10'>{item.Flow_Control_OFF=="Disabled" ?  <h6 style={{color:"red"}}>{item.Flow_Control_OFF}</h6> : <h6 style={{color:"green"}}>{item.Flow_Control_OFF}</h6>}</h6>
           </div>

           <div className='firstdiv'>
            <h6 className='class5' >Pressure Control Status :-</h6>
            <h6 className='class6' >{item.Pressure_Control_OFF=="Disabled" ?  <h6 style={{color:"red"}}>{item.Pressure_Control_OFF}</h6> : <h6 style={{color:"green"}}>{item.Pressure_Control_OFF}</h6>}</h6>
            <h6 className='class7' ></h6>
            <h6 className='class8' ></h6>
            <h6 className='class9' ></h6>
            <h6 className='class10'></h6>
           </div>
           
           
        </div>
 </div>
 </div>
      )}
    </div>
  )
}

export default Control