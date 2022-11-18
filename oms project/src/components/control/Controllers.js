
import React from 'react'
import  { useState,useEffect } from 'react'
import Routers from '../sidebar/Routers'
import { useParams } from "react-router-dom";

function Controller() {
  const [data, setData] = useState([])
  
  const { site_id } = useParams();
 
  useEffect(() => {
    fetch(`http://meters.siotel.in:8005/geomap/scheduler/${site_id}`).then((result)=>{
        result.json().then((resp)=>{
        console.warn("result",resp)
          setData(resp)
        })
      })
  }, [])
  console.warn(data)
  const [datas, setDatas] = useState([])
  return (
    <div>
      <Routers />
      { 
      data.map((item)=> 
    <div>
    
      <div class="row row-cols-1 row-cols-md-2 g-4">
    
        <div class="col  text-center">
          <div class="card mt-3 ml-5">
            <div class="card-header text-center">
            Valve Status 
            </div>
            
            <div class="card-body">
         
            <div className='firstdiv'>
             <h6 className='class3'>Valve{item.valve} :-</h6>
             <h6 className='class4'>{item.valve=="Close" ?  <h6 style={{color:"red"}}>{item.valve}</h6> : <h6 style={{color:"green"}}>{item.valve}</h6>}</h6>
            </div>
         
       </div>
            </div>
          
        </div>
         
{/*          
        <div class="col">
        <div class="card mt-3 mr-5">
          <div class="card-header text-center">
            Valve Scheduler Status
          </div>
          <div class="card-body">
          <div className='firstdiv'>
          
                       <h6 className='class3'>Valve 1 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_1_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_1_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_1_Scheduler}</h6>}</h6>
                       <h6 className='class3'>valve 2 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_2_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_2_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_2_Scheduler}</h6>}</h6>
                      </div>
             
                      <div className='firstdiv'>
                       <h6 className='class3'>valve 3 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_3_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_3_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_3_Scheduler}</h6>}</h6>
                       <h6 className='class3'>valve 4 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_4_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_4_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_4_Scheduler}</h6>}</h6>
                      </div>
            
    
                      <div className='firstdiv'>
                       <h6 className='class3'>Valve 5 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_5_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_5_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_5_Scheduler}</h6>}</h6>
                       <h6 className='class3'>valve 6 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_6_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_6_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_6_Scheduler}</h6>}</h6>
                      </div>
            
                      <div className='firstdiv'>
              
                       <h6 className='class3'>valve 7 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_7_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_7_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_7_Scheduler}</h6>}</h6>
                       <h6 className='class3'>valve 8 Scheduler :-</h6>
                       <h6 className='class4'>{item.Valve_8_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_8_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_8_Scheduler}</h6>}</h6>
                      </div>
                      </div>
                 </div>
        </div>
        */}

      </div>
  
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col  text-center">
          <div class="card mt-3 ml-5">
            <div class="card-header text-center">
            Valve Status 
            </div>
            <div class="card-body">
      
            <div className='firstdiv'>
          
             <h6 className='class1'>Valve 1 :-</h6>
           {/* <h6 className='class2'><Link to={`/${.site_id}/040301${item.Valve1}`}><button className="btn btn-success">ON</button></Link></h6>  */}
             <h6 className='class2'><button  className="btn btn-success"  onClick={()=>setDatas()} value={item.valve}> ON</button> </h6>
             <h6 className='class2'><button className="btn btn-danger" > OFF</button></h6>
            </div>
      
       </div>
            </div>
          
        </div>
       
         
        <div class="col">
        <div class="card mt-3 mr-5">
          <div class="card-header text-center">
            Valve Scheduler Status
          </div>
          <div class="card-body">
             <div className='firstdiv'>
                       <h6 className='class3'>Valve 1 Scheduler :-</h6>
                       <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
                      </div>
                      <div className='firstdiv'>
                    <h6 className='class3'>valve 2 Scheduler :-</h6>
                    <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
         </div>
                      <div className='firstdiv'>
                       <h6 className='class3'>valve 3 Scheduler :-</h6>
                       <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
                       
                      </div>
                      <div className='firstdiv'>
                      
                       <h6 className='class3'>valve 4 Scheduler :-</h6>
                       <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
                      </div>
    
                      <div className='firstdiv'>
                       <h6 className='class3'>Valve 5 Scheduler :-</h6>
                       <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
                     
                      </div>
                      <div className='firstdiv'>
                       <h6 className='class3'>valve 6 Scheduler :-</h6>
                       <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
                      </div>
                      <div className='firstdiv'>
                       <h6 className='class3'>valve 7 Scheduler :-</h6>
                       <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
                      </div>
                      <div className='firstdiv'>
              <h6 className='class3'>valve 7 Scheduler :-</h6>
              <h6 className='class2'><button className="btn btn-success">ON</button></h6>
             <h6 className='class2'><button className="btn btn-danger">OFF</button></h6>
              
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

export default Controller
// // import Table from 'react-bootstrap/Table';
// import Routers from "../sidebar/Routers";
// // import { useParams } from "react-router-dom";
// import React, { useState,useEffect } from 'react'
// function Controller() {
//     const [data, setData] = useState([])
//     // const { site_id } = useParams();
//   useEffect(() => {
//     fetch(`http://meters.siotel.in:8005/geomap/site/site_id`).then((result)=>{
//         result.json().then((resp)=>{
//         console.warn("result",resp)
//           setData(resp)
//         })
//       })
//   }, [])
//   console.warn(data)                                                                                                        
//   return (   
//   <>                                                                                                                     
                                                                                                                            
//              <Routers/> 
          
//              <div class="row mt-5">
//   <div class="col-sm-6 ">
//     <div class="card">
//     <div class="card-header text-center">
//             Valve Status 
//           </div>
       
//       <div class="card-body">
//       <div className='firstdiv'>
//             <h6 className='class1'>Valve 1 :-</h6>
//             <h6 className='class2'>{item.Valve1=="Close" ?  <h6 style={{color:"red"}}>{item.Valve1}</h6> : <h6 style={{color:"green"}}>{item.Valve1}</h6>}</h6>
//             <h6 className='class1'>valve 2 :-</h6>
//             <h6 className='class2'>{item.Valve2=="Close" ?  <h6 style={{color:"red"}}>{item.Valve2}</h6> : <h6 style={{color:"green"}}>{item.Valve2}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//            <h6 className='class1'>Valve 3 :-</h6>
//             <h6 className='class2'>{item.Valve3=="Close" ?  <h6 style={{color:"red"}}>{item.Valve3}</h6> : <h6 style={{color:"green"}}>{item.Valve3}</h6>}</h6>
//             <h6 className='class1'>valve 4 :-</h6>
//             <h6 className='class2'>{item.Valve4=="Close" ?  <h6 style={{color:"red"}}>{item.Valve4}</h6> : <h6 style={{color:"green"}}>{item.Valve4}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//            <h6 className='class1'>Valve 5  :-</h6>
//             <h6 className='class2'>{item.Valve5=="Close" ?  <h6 style={{color:"red"}}>{item.Valve5}</h6> : <h6 style={{color:"green"}}>{item.Valve5}</h6>}</h6>
//             <h6 className='class1'>valve 6 :-</h6>
//             <h6 className='class2'>{item.Valve6=="Close" ?  <h6 style={{color:"red"}}>{item.Valve6}</h6> : <h6 style={{color:"green"}}>{item.Valve6}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//            <h6 className='class1'>Valve 7 :-</h6>
//             <h6 className='class2'>{item.Valve7=="Close" ?  <h6 style={{color:"red"}}>{item.Valve7}</h6> : <h6 style={{color:"green"}}>{item.Valve7}</h6>}</h6>
//             <h6 className='class1'>valve 8 :-</h6>
//             <h6 className='class2'>{item.Valve8=="Close" ?  <h6 style={{color:"red"}}>{item.Valve8}</h6> : <h6 style={{color:"green"}}>{item.Valve8}</h6>}</h6>
//            </div>
//       </div>
       
//     </div>
//   </div>
//   <div class="col-sm-6">
//     <div class="card">
//     <div class="card-header text-center">
//            Valve Scheduler Status
//           </div>
         
//       <div class="card-body">
//       <div className='firstdiv'>
          
//             <h6 className='class3'>Valve 1 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_1_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_1_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_1_Scheduler}</h6>}</h6>
//             <h6 className='class3'>valve 2 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_2_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_2_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_2_Scheduler}</h6>}</h6>
//            </div>
           
//            <div className='firstdiv'>
//             <h6 className='class3'>valve 3 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_3_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_3_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_3_Scheduler}</h6>}</h6>
//             <h6 className='class3'>valve 4 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_4_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_4_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_4_Scheduler}</h6>}</h6>
//            </div>
          

//            <div className='firstdiv'>
//             <h6 className='class3'>Valve 5 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_5_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_5_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_5_Scheduler}</h6>}</h6>
//             <h6 className='class3'>valve 6 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_6_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_6_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_6_Scheduler}</h6>}</h6>
//            </div>
          
//            <div className='firstdiv'>
            
//             <h6 className='class3'>valve 7 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_7_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_7_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_7_Scheduler}</h6>}</h6>
//             <h6 className='class3'>valve 8 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_8_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_8_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_8_Scheduler}</h6>}</h6>
//            </div>
         
//       </div>
  
//     </div>
//   </div>
// </div> 
    
//              <div class="row mt-5">
//   <div class="col-sm-6 ">
//     <div class="card">
//       <div class="card-body">
       
//       </div>
//     </div>
//   </div>
//   <div class="col-sm-6">
//     <div class="card">
//       <div class="card-body">
        
//       </div>
//     </div>
//   </div>
// </div>   




// <div class="col">
//         <div class="card mt-3 mr-5">
//           <div class="card-header text-center">
//             Valve Status and Valve Scheduler Status
//           </div>
//           <div class="card-body">
//           <div className='firstdiv'>
//             <h6 className='class1'>Valve 1 :-</h6>
//             <h6 className='class2'>{item.Valve1=="Close" ?  <h6 style={{color:"red"}}>{item.Valve1}</h6> : <h6 style={{color:"green"}}>{item.Valve1}</h6>}</h6>
//             <h6 className='class3'>Valve 1 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_1_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_1_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_1_Scheduler}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>valve 2 :-</h6>
//             <h6 className='class2'>{item.Valve2=="Close" ?  <h6 style={{color:"red"}}>{item.Valve2}</h6> : <h6 style={{color:"green"}}>{item.Valve2}</h6>}</h6>
//             <h6 className='class3'>valve 2 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_2_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_2_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_2_Scheduler}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>Valve 3 :-</h6>
//             <h6 className='class2'>{item.Valve3=="Close" ?  <h6 style={{color:"red"}}>{item.Valve3}</h6> : <h6 style={{color:"green"}}>{item.Valve3}</h6>}</h6>
//             <h6 className='class3'>valve 3 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_3_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_3_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_3_Scheduler}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>valve 4 :-</h6>
//             <h6 className='class2'>{item.Valve4=="Close" ?  <h6 style={{color:"red"}}>{item.Valve4}</h6> : <h6 style={{color:"green"}}>{item.Valve4}</h6>}</h6>
//             <h6 className='class3'>valve 4 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_4_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_4_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_4_Scheduler}</h6>}</h6>
//            </div>

//            <div className='firstdiv'>
//             <h6 className='class1'>Valve 5  :-</h6>
//             <h6 className='class2'>{item.Valve5=="Close" ?  <h6 style={{color:"red"}}>{item.Valve5}</h6> : <h6 style={{color:"green"}}>{item.Valve5}</h6>}</h6>
//             <h6 className='class3'>Valve 5 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_5_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_5_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_5_Scheduler}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>valve 6 :-</h6>
//             <h6 className='class2'>{item.Valve6=="Close" ?  <h6 style={{color:"red"}}>{item.Valve6}</h6> : <h6 style={{color:"green"}}>{item.Valve6}</h6>}</h6>
//             <h6 className='class3'>valve 6 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_6_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_6_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_6_Scheduler}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>Valve 7 :-</h6>
//             <h6 className='class2'>{item.Valve7=="Close" ?  <h6 style={{color:"red"}}>{item.Valve7}</h6> : <h6 style={{color:"green"}}>{item.Valve7}</h6>}</h6>
//             <h6 className='class3'>valve 7 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_7_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_7_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_7_Scheduler}</h6>}</h6>
//            </div>
//            <div className='firstdiv'>
//             <h6 className='class1'>valve 8 :-</h6>
//             <h6 className='class2'>{item.Valve8=="Close" ?  <h6 style={{color:"red"}}>{item.Valve8}</h6> : <h6 style={{color:"green"}}>{item.Valve8}</h6>}</h6>
//             <h6 className='class3'>valve 8 Scheduler :-</h6>
//             <h6 className='class4'>{item.Valve_8_Scheduler=="Close" ?  <h6 style={{color:"red"}}>{item.Valve_8_Scheduler}</h6> : <h6 style={{color:"green"}}>{item.Valve_8_Scheduler}</h6>}</h6>
//            </div>
//           </div>
//         </div>
//       </div>
   {/* <Table striped bordered hover variant="light">                                                                                                             
   <tbody>                                                                                                                           
        <tr>
          <td>Valve 1</td>
          <td><button class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
       </tr>
        <tr>
         
          <td>Valve 2</td>
          
          <td><button class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success  mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
        </tr>
        <tr>
          
          <td>Valve 3</td>
          
          <td><button   class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success  mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
        </tr>
        <tr>
          
          <td>Valve 4</td>
      
          <td><button   class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success  mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
        </tr>
        <tr>
          
          <td>Valve 5</td>
          
          <td><button   class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success  mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
        </tr>
        <tr>
          
          <td>Valve 6</td>
         
          <td><button   class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success  mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
        </tr>
        <tr>
         
          <td>Valve 7</td>
       
          <td><button  class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success  mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
        </tr>
        <tr>
          
          <td>Valve 8</td>
         
          <td><button   class="btn btn-success mr-3">On</button><button type="button" class="btn btn-danger">Off</button></td>
          <td>Schedule status</td>
          <td><button type="button" class="btn btn-success  mr-3">Enable</button><button type="button" class="btn btn-danger">Disable</button></td>
        </tr>
      </tbody>
    </Table> */}
//     </>  
//   );
  
// }

// export default Controller;

