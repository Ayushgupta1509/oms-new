import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import Report from "./components/report/Report";
import Map from "./components/map/Map";
import Amsmap from "./components/Ams_map/Amsmap"
import Pumping_map from "./components/Pump_house/Pumping_map"
import ChangePassword from "./pages/auth/ChangePassword";
import Userprofile from "./components/user_view_profile/Userprofile"
import Control from "./components/control/Control";
import Controls from "./components/control/Controls"
import Amscontrol from "./components/amscontrol/Amscontrol";
import Relation_dropdown from "./components/control/Relation_dropdown";
import Farmer_details from "./components/control/Farmer_details"

import Farmer from "./components/farmer/Farmer";
import Scheduler_Time from "./components/scheduler_time/Scheduler_Time";
import Controllers from "./components/control/Controllers"
import Controloption from "./components/controloption/Controloption"
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="/" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
          <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
          <Route path="api/user/reset/:id/:token" element={access_token ? <ResetPassword /> : <Navigate to="/" />} /></Route>
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/map" element={access_token ? <Map /> : <Navigate to="/" />} />
          <Route path="/amsmap" element={access_token ? <Amsmap /> : <Navigate to="/" />} />
          <Route path="/pumphouse" element={access_token ? <Pumping_map /> : <Navigate to="/" />} />
          <Route path="/userprofile" element={access_token ? <Userprofile /> : <Navigate to="/" />} />
          <Route path="/report" element={<Report /> } />
          <Route path="/control" element={ <Control /> } />
          <Route path="/farmer/:site_id" element={ <Farmer /> } />
          <Route path="/Farmer_details/:site_id/:" element={ <Farmer_details /> } />
          <Route path="/controls/:site_id" element={ <Controloption /> } />
          <Route path="/scheduler/:site_id" element={ <Scheduler_Time /> } />
          <Route path="/controloption" element={ <Controls /> } />
          <Route path="/controllers/:site_id" element={ <Controllers /> } />
          <Route path="/controller/:site_id" element={ <Controllers /> } />
          <Route path="/amscontrol" element={ <Amscontrol />} />
          <Route path="/Relation_dropdown" element={ <Relation_dropdown /> } />
          <Route path="ChangePassword" element={access_token ? <ChangePassword /> : <Navigate to="/" />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
