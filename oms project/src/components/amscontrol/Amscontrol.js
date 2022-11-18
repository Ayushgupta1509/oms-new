import React from 'react'
import Routers from '../sidebar/Routers';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import ams_image from '../../images/ams_image.png'
function Amscontrol() {
  return (
    <div>
      <Routers/>
      <Container style={{ marginTop: '25px',float:'right'}}>
        <Grid container spacing={1} justify="center" >
          <Grid item lg={1.71} >
            <Paper style={{ color: "white", background: '#f7786b ', height: "70px", marginBottom: '10px', textAlign: 'center', width: '140px' }}>
              <Box p={1} style={{ height: '4vh' }} >
                <Typography>
                  <a>Pressure</a>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>45kg</h6>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={1.71} >
            <Paper style={{ background: '#034f84 ', height: "70px", marginBottom: '10px', textAlign: 'center' }}>
              <Box p={1} style={{ height: '4vh' }} >
                <Typography>
                  <a style={{ color: 'white' }}>Communication Status</a>
                  <br />
                  <span style={{ color: 'red' }}><FiberManualRecordIcon /></span>
                </Typography>
              </Box>
            </Paper>
            <Paper style={{ color: "white", background: '#f7786b', height: "70px", textAlign: 'center' }}>
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
          <div className='table-responsive'>     
                <table class="table-danger table-striped" style={{width: '100%', textAlign: 'center' }}>
                  <tbody><tr>
                  </tr>
                    <tr >
                      <td >AMS No.</td>
                      <td>12455555</td>
                    </tr>
                    <tr>
                      <td >Village Name</td>
                      <td>sodala</td>
                    </tr>
                    <tr>
                      <td>Area Name</td>
                      <td>sodala area</td>
                    </tr>
                    <tr>
                     
                      <td>Pipe Size</td>
                      <td>15 meter</td>
                    </tr>
                    <tr >
                      <td>Valve Size</td>
                      <td>2 inch</td>
                    </tr>
                    <tr >
                      <td>Coordinates</td>
                      <td>6677</td>
                    </tr>
                    <tr >
                      <td >Design Pressure</td>
                      <td>556</td>
                    </tr>
                  </tbody></table>
                  </div>
          </Grid>
        <Grid item lg={1.71} >
            <Paper style={{ background: '#034f84', height: "70px", marginBottom: '10px', textAlign: 'center' }}>
              <Box p={1} style={{ height: '4vh' }} >
                <Typography>
                  <a style={{ color: 'white' }}>Door Status</a>
                  <br />
                  <span style={{ color: 'red' }}><FiberManualRecordIcon /></span>
                </Typography>
              </Box>
            </Paper>
            <Paper style={{ color: "white", background: '#f7786b', height: "70px", textAlign: 'center' }}>
              <Box p={1} style={{ height: '4vh' }}>
                <Typography>
                  <a>Real Time Clock</a>
                  <div>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>01:00</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
            <Paper className='mt-3' style={{ color: "white", background: '#034f84', height: "70px", textAlign: 'center' }}>
              <Box p={1} style={{ height: '4vh' }}>
                <Typography>
                  <a>Real Time Voltage</a>
                  <div>
                  <h6 className="mt-1" style={{ textAlign: 'center' }}>45 V</h6>
                  </div>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
   
          
    <div style={{ marginRight:"15rem"}} >
    <img  style={{ marginRight:"40rem"}} src={ams_image}/>
    </div>
     

 
 




    </div>
   
  )
}

export default Amscontrol

