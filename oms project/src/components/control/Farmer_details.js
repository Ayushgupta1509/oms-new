import React,{ useState, useEffect } from 'react'
import Routers from '../sidebar/Routers'
import { useParams } from "react-router-dom";

function Farmer() {
  const [data, setData] = useState([])
  const { site_id,Valve1 } = useParams();
    useEffect(() => {
      fetch(`http://meters.siotel.in:8005/geomap/site_details/${site_id}`).then((result)=>{
          result.json().then((resp)=>{
            // console.warn("result",resp)
            setData(resp)
          })
        })
    }, [])
    console.warn(data)
  return (
    <div>
      <Routers/>
    <h1 className='text-center'>Farmer Details</h1>
    <div className='table-responsive mt-5'>        
    <table  class="table table-hover" style={{backgroundColor:"var(--card-04-bg)"}}>
    <thead>
    <tr>
      <th>Farmer Name</th>
      <th>User_Name</th>
      <th>Site_ID</th>
      <th>Mobile</th>
      <th>Area</th>
      <th>Farm_Area</th>
      <th>Valve</th>
      <th>Date_Time</th>
    </tr>
  </thead>
  <tbody>
  { 
      data.map((item)=>
    <tr>
      <th>{item.fname}</th>
      <td>{item.username}</td>
      <td>{item.site_id}</td>
      <td>{item.mobile}</td>
      <td>{item.area}</td>
      <td>{item.Farm_arear}</td>
      <td>{item.valve}</td>
      <td>{item.Date_time}</td>
    </tr>
      )}
  </tbody>
      </table>
    </div>
    </div>
  )
}

export default Farmer