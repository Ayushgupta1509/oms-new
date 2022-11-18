import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import Navs from '../../pages/Navs'

import pipe from '../../images/pipe.png'
import './control.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import locationIcon from '@iconify/icons-material-symbols/valve'
import { Icon } from '@iconify/react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Relation_dropdown() {
    const [country, setCountry]= useState([]);
    const [countryid, setCountryid]=useState('');
    const [st, setSt]= useState([]);
    const [stateid, setStateid]= useState('');
    const [city, setCity]= useState([]);
    const [controlid, setcontrolid]= useState('');
    const [control, setControl]= useState([]);
//start//////
     useEffect( ()=>{
         const getcountry= async()=>{
             const rescountry= await fetch("http://meters.siotel.in:8005/geomap/chuck/");
             const rescon= await rescountry.json();
             setCountry(await rescon);
         }
         getcountry();
     },[]);

     const handlecountry=(event)=>{
         const getcountryid= event.target.value;
         setCountryid(getcountryid);
     }
     //end//
//start//////
     useEffect( ()=>{
     const getstate= async()=>{
         const resstate= await fetch(`http://meters.siotel.in:8005/geomap/chuck/${countryid}`);
         const resst= await resstate.json();
         setSt(await resst);
     }
    getstate();
     },[countryid]);

     const handlestate=(event)=>{
        const getstateid= event.target.value;
        setStateid(getstateid);
    }
      //end//
//start//////
useEffect( ()=>{
    const getcity= async()=>{   
        const rescity= await fetch(`http://meters.siotel.in:8005/geomap/area/${stateid}`);
        const rcity= await rescity.json();
        setCity(await rcity);
        console.warn(rescity)
    }
getcity();
},[stateid]);
const handlecontrol=(event)=>{
    const getcontrolid= event.target.value;
    setcontrolid(getcontrolid);
}
     //end//  
     
     useEffect( ()=>{
        const getcontrol= async()=>{   
            const rescontrol= await fetch(`http://meters.siotel.in:8005/geomap/bpayload/`);
            const rcontrol= await rescontrol.json();
            setControl(await rcontrol);
            console.warn(rescontrol)
        }
    getcontrol();
    },[controlid]);
   return (
    <> 
    <Navs/>
    <React.Fragment >
      <Container className="content mt-5" >
        <div className="row">
          <div className="col-sm-12">
            {/* <h2 className="mt-4 mb-4 fw-bold">
              Select Country, State and City ReactJs{" "}
            </h2> */}

            <form className="row g-3">

               <div className="col-md-3">
                <label  className="form-label">Site </label>
                <select name="site" className="form-control p-2"  onChange={(e)=>handlecountry(e)} >
                  <option value="">--Select Site--</option>
                  {
                 country.map( (getcon, index)=>(
                  <option key={index} value={getcon.id}>{getcon.chuck } </option>
                 ))
                  }
                </select>
              </div>

              <div className="col-md-3">
                <label  className="form-label">Area</label>
                <select className="form-select" name="area"  onChange={(e)=>handlestate(e)}>
                  <option value="">--Select Area--</option>
                  {
                    st.map( (getst, index)=>(
                     <option key={index} value={getst.id}>{getst.area } </option>
                    )) 
                  }                  
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Sub-Area</label>
                <select className="form-select" name="subarea"  onChange={(e)=>handlecontrol(e)}>
                  <option value="">--Select Sub-Area--</option>
                  {
                      city.map( (gcity, index)=>(
                      <option key={index} value={gcity.id}>{gcity.site_id}</option>
                      ))
                  }                 
                </select>
              </div>
              <div className="col-md-3">                
              <button className="btn btn-warning mt-4"><Link to="/control">control</Link></button>
              </div>


              {/* <div className="col-md-3">
                <label className="form-label">Sub</label>
                <select className="form-select" name="subarea">
                  <option value="">--Select --</option>
                  {
                      control.map( (gcontrol, index)=>(
                      <option key={index} value={gcontrol.id}>{gcontrol.owner}</option>
                      ))
                  }                 
                </select>
              </div> */}
              
            </form>
          </div>
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
      <td>{gcontrol.battery_voltage}%</td>
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
      </Container>
    </React.Fragment>
    {
         control.map((gcontrol, index)=>(
    <Container style={{ marginTop: '25px' }}>
        <Grid container spacing={3} justify="center" >
        <Grid item lg={1.71} >
            <Paper style={{ color: "white", background: '#f7786b', height: "150px", textAlign: 'center', width: '140px' }}>
              <Box p={1.5}>
                <Typography>
                  <a>Chuck Name</a>
                  <div>
                    <h6 className="mt-5" style={{ textAlign: 'center' }}>{gcontrol.chuck}</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={1.71} >
            <Paper style={{ color: "white", background: ' #f7786b', height: "70px", marginBottom: '10px', textAlign: 'center', width: '140px' }}>
              <Box p={1} style={{ height: '4vh' }} >

                <Typography>
                  <a>Inlet Pressure</a>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>{gcontrol.inlet_pressure}</h6>
                 
                </Typography>
              </Box>
            </Paper>
            <Paper style={{ color: "white", background: '#034f84', height: "70px", textAlign: 'center', width: '140px' }}>
              <Box p={1} style={{ height: '4vh' }}>
                <Typography>
                  <a>Outlet Pressure</a>
                  <div>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>{gcontrol.outlet_pressure}</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={1.71} >
            <Paper style={{ color: "white", background: '#034f84', height: "70px", marginBottom: '10px', textAlign: 'center', width: '140px' }}>
              <Box p={1} style={{ height: '4vh' }} >
                <Typography>
                  <a>Flow</a>
                  <div>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>6</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
            <Paper style={{ color: "white", background: ' #f7786b', height: "70px", textAlign: 'center', width: '140px' }}>
              <Box p={1} style={{ height: '4vh' }}>
                <Typography>
                  <a>Total Discharge</a>
                  <div>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>{gcontrol.deveui}</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
          </Grid> <Grid item lg={1.71} >
            <Paper style={{ background: ' #f7786b', height: "70px", marginBottom: '10px', textAlign: 'center' }}>
              <Box p={1} style={{ height: '4vh' }} >
                <Typography>
                  <a style={{ color: 'white' }}>Communication Status</a>
                  <br />
                  <span style={{ color: 'green' }}><FiberManualRecordIcon /></span>
                </Typography>
              </Box>
            </Paper>
            <Paper style={{ color: "white", background: '#034f84', height: "70px", textAlign: 'center' }}>
              <Box p={1} style={{ height: '4vh' }}>
                <Typography>
                  <a>Last Response Time</a>
                  <div>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>01:00</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
          </Grid> 
          <Grid item lg={1.71} >
            <Paper style={{ color: "white", background: '#034f84', height: "70px", marginBottom: '10px', textAlign: 'center', width: '140px' }}>
              <Box p={1} style={{ height: '4vh' }} >
                <Typography>
                  <a>Door Status</a>
                  <br />
                  <span style={{ color: 'red' }}><FiberManualRecordIcon /> </span>
                </Typography>
              </Box>
            </Paper>
            <Paper style={{ color: "white", background: ' #f7786b', height: "70px", textAlign: 'center', width: '140px' }}>
              <Box p={1} style={{ height: '4vh' }}>
                <Typography>
                  <a>Controller Time</a>
                  <div>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>12:00</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={1.71} >
            <Paper style={{ color: "white", background: '#034f84', height: "150px", textAlign: 'center', width: '140px' }}>
              <Box p={1.5}>
                <Typography>
                  <a>Battery Voltage</a>
                  <div>
                  <h6 className="mt-5" style={{ textAlign: 'center' }}>{gcontrol.battery_voltage}%</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid className='mt-4' data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div className='div2'>
            <div className='div1'>
              <Icon className="location-down1 " icon={locationIcon} />
              <Icon className="location-down2 " icon={locationIcon} />
              <Icon className="location-down1 " icon={locationIcon} />
              <Icon className="location-down2" icon={locationIcon} />
            </div>
            <div className='valves'>
              <img className='valve' style={{ width: "900", height: "auto", marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={pipe} />
            </div>

            <div className='div3'>
              <Icon className="location-down1 " icon={locationIcon} />
              <Icon className="location-down2 " icon={locationIcon} />
              <Icon className="location-down1" icon={locationIcon} />
              <Icon className="location-down2" icon={locationIcon} />
            </div>
          </div>
        </Grid>
      </Container>
        ))
      }
      
    </> 
  );
}

export default Relation_dropdown;