import React from "react";
import Typed from "react-typed";


function Typing() {
  return (
    <div className="app">
     
      <div className="animated-typing">
        <Typed
          strings={[
         "Outlet Management System",
            "Air Management System",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
    </div>
  );
}

export default Typing;