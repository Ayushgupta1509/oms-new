import React from 'react'
import Routers from '../sidebar/Routers'
import './controller.css'
import "./Cards.css";
import { Data } from "./Data";
import Card from "./Card";


function Controller() {
  return (

    <div>
      <Routers/>
      <div className="dashboard">
    
      <div className="Cards">
      {Data.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
            
          </div>
        );
      })}
    </div>

</div>
      </div>
  )
}

export default Controller

