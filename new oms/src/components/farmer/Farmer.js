// import React,{ useState,useEffect } from 'react'
// import '../control/controls.css'


// import Routers from '../sidebar/Routers'
// function Farmer() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch(`http://meters.siotel.in:8005/geomap/site_details/site_1/`).then((result)=>{
//         result.json().then((resp)=>{
//         console.warn("result",resp)
//           setData(resp)
//         })
//       })
//   }, [])
//   console.warn(data)
//   return (
//     <div>
//         <Routers/>



// <div class="row mt-5">
// { 
//       data.map((item)=>
//   <div class="col-sm-4 ">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title "style={{textAlign:"center"}}>{item.fname}</h5>
//         <div className='firstdiv mt-3'>
//         <h6 className='class1'>valve  :-</h6>
//             <h6 className='class2'>{item.valve}</h6>
//             <h6 className='class3'>Username :-</h6>
//             <h6 className='class4'>{item.username}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>Mobile  :-</h6>
//             <h6 className='class2'>{item.mobile}</h6>
//             <h6 className='class3'>area :-</h6>
//             <h6 className='class4'>{item.area}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>Farm_arear  :-</h6>
//             <h6 className='class2'>{item.Farm_arear}</h6>
//             <h6 className='class3'>site_id :-</h6>
//             <h6 className='class4'>{item.site_id}</h6>
//            </div>
//            <div className='firstdiv'>
//            <h6 className='class3'>Date_time :-</h6>
//             <h6 className='class4'>{item.Date_time}</h6>
//             <h6 className='class3'></h6>
//             <h6 className='class4'></h6>
//            </div>

//       </div>
//     </div>
//   </div>
//     )}
// </div>
  



//     </div>
//   )
// }

// export default Farmer
// import React,{ useState,useEffect } from 'react'
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";


// const useStyles = makeStyles({
//   gridContainer: {
//     paddingLeft: "40px",
//     paddingRight: "40px"
//   }
// });
// const useStyle = makeStyles({
//   root: {
//     minWidth: 200
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });
// function Farmer() {
//   const [data, setData] = useState([])
//    useEffect(() => {
//      fetch(`http://meters.siotel.in:8005/geomap/site_details/site_1/`).then((result)=>{
//          result.json().then((resp)=>{
//          console.warn("result",resp)
//            setData(resp)
//          })
//        })
//    }, [])
//    console.warn(data)
//   const classe = useStyles();
//   const classes = useStyle();

//   return (
//   <>
   
//     <Grid container spacing={4} className={classe.gridContainer} justify='center'>
//       { 
//        data.map((item)=>
  
//       <Grid item xs={12} sm={6} md={4}>
//       <Card className={classes.root} variant="outlined">
//       <h5 class="card-title">{item.fname}</h5>
//          <div className='firstdiv mt-3'>
//          <h6 className='class1'>valve  :-</h6>
//              <h6 className='class2'>{item.valve}</h6>
//              <h6 className='class3'>Username :-</h6>
//              <h6 className='class4'>{item.username}</h6>
//             </div>
//             <div className='firstdiv'>
//              <h6 className='class1'>Mobile  :-</h6>
//              <h6 className='class2'>{item.mobile}</h6>
//              <h6 className='class3'>area :-</h6>
//              <h6 className='class4'>{item.area}</h6>
//             </div>
//             <div className='firstdiv'>
//              <h6 className='class1'>Farm_arear  :-</h6>
//              <h6 className='class2'>{item.Farm_arear}</h6>
//              <h6 className='class3'>site_id :-</h6>
//              <h6 className='class4'>{item.site_id}</h6>
//             </div>
//             <div className='firstdiv'>
//             <h6 className='class3'>Date_time :-</h6>
//              <h6 className='class4'>{item.Date_time}</h6>
//              <h6 className='class3'></h6>
//              <h6 className='class4'></h6>
//             </div>
//     </Card>
   
//     </Grid>
//    )}
    
//     </Grid >
    
     
//     </>
//   )
// }

// export default Farmer

import React,{ useState, useEffect } from 'react'
import Routers from '../sidebar/Routers'
import { useParams } from "react-router-dom";
import './farmer.css'
function Farmer() {
  const [data, setData] = useState([])
  const { site_id } = useParams();
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
    <table  class="table table-primary table-hover" >
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