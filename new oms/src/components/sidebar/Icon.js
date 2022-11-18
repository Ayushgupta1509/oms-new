import React, { useState, useRef } from 'react';

import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '../../pages/Logout';
import Namelogout from '../../pages/Namelogout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from "react-router-dom";
export default function Icon() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <button style={{backgroundColor:"#1C4E80",border:"none",color:"white", padding:" 15px 32px",height: '55px' }} onClick={handleClick}><AccountCircleIcon/></button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" style={{color:"black"}}><Namelogout/></Popover.Header>
          <Popover.Body>
            <h5><Link  style={{color:" #2888C4",fontSize:"20px", textDecoration:"none",paddingLeft:"11px"}} to="/userprofile"><PersonAddIcon/> Your Profile</Link></h5>
            <Logout/>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
