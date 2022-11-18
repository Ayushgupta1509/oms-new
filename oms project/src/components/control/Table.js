import React from 'react'
import { useState, useEffect } from "react";

function Table() {
    const [controlid, setcontrolid]= useState('');
    const [control, setControl]= useState([]);

    const handlecontrol=(event)=>{
        const getcontrolid= event.target.value;
        setcontrolid(getcontrolid);
    }
      useEffect( ()=>{
        const getcontrol= async()=>{   
            const rescontrol= await fetch(`http://meters.siotel.in:8005/geomap/site_details/${controlid}`);
            const rcontrol= await rescontrol.json();
            setControl(await rcontrol);
            console.warn(rescontrol)
        }
    getcontrol();
    },[controlid]);
  return (
    <div>
         <div className='table-responsive mt-5' >
          <table   class="table table-primary">
  <thead>
    <tr>
      <th>id</th>
      <th>site_id</th>
      <th>deveui</th>
      <th>chuck</th>
      <th>area</th>
      <th>lat</th>
      <th>lat</th>
      <th>owner</th>
      <th>cumulative_flow</th>
      <th>battery_voltage</th>
      <th>daily_flow</th>
      <th>flow_rate</th>
      <th>outlet_pressure</th>
      <th>inlet_pressure</th>
      <th>valve1</th>
      <th>valve2</th>
      <th>valve3</th>
      <th>valve4</th>
      <th>valve5</th>
      <th>valve6</th>
      <th>valve7</th>
      <th>valve8</th>
      <th>Date_time</th>
    </tr>
  </thead>
  <tbody>
    {
         control.map((gcontrol, index)=>(
    <tr>
      <td>{gcontrol.id}</td>
      <td>{gcontrol.site_id}</td>
      <td>{gcontrol.deveui}</td>
      <td>{gcontrol.chuck}</td>
      <td>{gcontrol.area}</td>
      <td>{gcontrol.lat}</td>
      <td>{gcontrol.lat}</td>
      <td>{gcontrol.owner}</td>
      <td>{gcontrol.cumulative_flow}</td>
      <td>{gcontrol.battery_voltage}</td>
      <td>{gcontrol.daily_flow}</td>
      <td>{gcontrol.flow_rate}</td>
      <td>{gcontrol.outlet_pressure}</td>
      <td>{gcontrol.inlet_pressure}</td>
      <td>{gcontrol.valve1}</td>
      <td>{gcontrol.valve2}</td>
      <td>{gcontrol.valve3}</td>
      <td>{gcontrol.valve4}</td>
      <td>{gcontrol.valve5}</td>
      <td>{gcontrol.valve6}</td>
      <td>{gcontrol.valve7}</td>
      <td>{gcontrol.valve8}</td>
      <td>{gcontrol.Date_time}</td>
    </tr>
      ))
}
  </tbody>
</table>
</div>
    </div>
  )
}

export default Table