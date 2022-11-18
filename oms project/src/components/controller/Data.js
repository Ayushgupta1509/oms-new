// Sidebar imports
import {UilClipboardAlt,} from "@iconscout/react-unicons";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

export const Data = [
  {
    title: "Outlet Pressure",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Outlet Pressure",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  
  {
    title: "Inlet Pressure",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
  
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Inlet Pressure",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Flow Rate",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Flow Rate",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Door Status",
    color: {
      backGround: "linear-gradient(180deg, blue 0%, #c484f3 100%)",
      
    },
    barValue: 70,
    value: "65,480",
    png: UilUsdSquare,
    series: [
      {
        name: "Door Status",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
];