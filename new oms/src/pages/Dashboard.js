import React from 'react'
import {Link} from "react-router-dom"
import './maindashboard.css'
import Routers from '../components/sidebar/Routers'
function Dashboard() {
  return (
    <div id="images">
      <Routers/>
  
      <div class="card-group center" id="central">
      
  <div class="card " id="firstcards" style={{background:'#DDE2E9'}}>
  <Link to="/pumphouse">
    <div class="card-body" id='mainbodys'>
      <h5 class="card-text">PUMPING STATION</h5>
    </div>
    </Link>
  </div>
  

  <div class="card "  id="secondcards" style={{background:'#DDE2E9'}}>
  <Link to="/map">
    <div class="card-body" id='mainbodys'>
    <h5 class="card-text">OMS</h5>
    </div>
    </Link>
  </div>


  <div class="card" id='thirdcards' style={{background:'#DDE2E9'}}>
  <Link to="/amsmap">
    <div class="card-body" id='mainbodys'>
    <h5 class="card-text">AMS</h5>
    </div>
    </Link>
  </div>
 
</div>
    </div>
   
  )
}

export default Dashboard