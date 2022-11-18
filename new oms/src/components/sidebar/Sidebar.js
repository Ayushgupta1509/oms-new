import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FaUser } from "react-icons/fa";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReportIcon from '@mui/icons-material/Report';
export const Sidebar = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  
  {
    title: 'LORA API',
    path: '/lora',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Device Register',
    path: '/deviceregister',
    icon: <DeviceHubIcon/>
  },
  {
    title: 'Device ',
    path: '/device',
    icon:<AppRegistrationIcon />
  },
  {
    title: 'Control ',
    path: '/control',
    icon:<AppRegistrationIcon />
  },
 
  {
    title: 'Report',
    path: '/report',
    icon: <ReportIcon />
  },
  {
    title: 'Map',
    path: '/map',
    icon: <LocationOnIcon />
  },
  {
    title: 'Downlink',
    path: '/downlink',
    icon: <LocationOnIcon />
  },
];