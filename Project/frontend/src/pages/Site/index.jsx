import React from "react";
import {  Route, Routes } from "react-router-dom";
import AddSite from "../../components/Site/AddSite";
import SiteDashboard from "./SiteDashboard";
import NewSite from "../../components/Site/NewSite";
import OngoingSite from "../../components/Site/OngoingSite";
import CompleteSite from "../../components/Site/CompleteSite";
import HoldSite from "../../components/Site/HoldSite";
import HoldSiteForm from "../../components/Site/HoldSitebtnForm";
import EmployeeDetails from "../../components/Site/Employee";
import RequestEmp from "../../components/Site/RequestEmp";
import EquipmentDetails from "../../components/Site/EquipmentDetails";
import RequestEquip from "../../components/Site/requestEquip";
import UpdateHold from "../../components/Site/UpdateHold";
import UpdateAddSite from "../../components/Site/UpdateAddSite";
import UpdateOngoing from "../../components/Site/UpdateOngoing";

export default function SitePage(props) {
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">   
        <div className="w-[100%] h-[25%] flex flex-row justify-center items-center">

        </div>
        <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
        <Routes>
        
        <Route path="*" element={<SiteDashboard/>} />
        <Route path="newSite" element={<NewSite/>} />
        <Route path="newSite/addSite" element={<AddSite/>} />
        <Route path="ongoingSite" element={<OngoingSite/>} />
        <Route path="completeSite" element={<CompleteSite/>} />
        <Route path="holdSite" element={<HoldSite/>} />
        <Route path="holdSite/holdForm" element={<HoldSiteForm/>} /> 
        <Route path="emloyeedetails" element={<EmployeeDetails/>}/>
        <Route path="emloyeedetails/requestEmployee" element={<RequestEmp/>}/>
        <Route path="equipmentdetails" element={<EquipmentDetails/>}/>
        <Route path="equipmentdetails/requestEquipment" element={<RequestEquip/>}/>
        <Route path="holdSite/holdForm/updateHoldSite" element={<UpdateHold/>} />
        <Route path="/updateongoinsite" element={<UpdateOngoing/>} />
        </Routes>
        </div>
    </div>
  );
}