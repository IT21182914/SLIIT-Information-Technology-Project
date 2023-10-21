import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Background from "./components/Template/Background";
import LoginPage from "./pages/Login";
import { adminContext } from "./user/adminContext";
import Home from "./pages/Home/Home";
import UserForm from "./components/Template/UserForm";
import axios from "axios";
import AdminActivatePage from "./pages/AdminActivatePage";
import UserBackGround from "./components/Template/UserBackGround";
import Order from "./components/Customers/BuildRequestForm";
import CustomerRegistrationPage from "./pages/CustomerRegistration";
import CusRequestView from "./components/Customers/CusOrderView";
import CustomerEdit from "./pages/CustomerEdit";
import EmployeePages from "./pages/HR/Employee";

import PackageOverview from "./pages/Packages/PackageOverview";
import UpdateAddOns from "./pages/Packages/UpdateAddons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from "./pages/Packages/PlaceOrder";




function App() {
axios.defaults.withCredentials = true;

const [admin, setAdmin] = useState(null);
const [initialized, setInitialized] = useState(false);


// if(admin == null){
//   axios.get("http://localhost:5000/admin").then((res)=>{    
//       if(res.data._id !== null){               
//         setAdmin(res.data);
//       }
//       setInitialized(true);
//     })  
// }
useEffect(() => {
  axios.get("http://localhost:5000/admin").then((res)=>{
    if(res.data._id !== null){
      setAdmin(res.data);
      
    }
    setInitialized(true);
  })
}, [])
  return (
    <adminContext.Provider value={{admin,setAdmin}}>
    <BrowserRouter>
      <Routes>

        <Route path="login" element={<LoginPage/>}/>
        <Route path="admin/*" element={<Background/>}/>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/employee/*" element={<EmployeePages/>}/>

        <Route path="/View" exact element={<UserForm/>}/>
        <Route path="/activateAdminAccount/:id" exact element={<AdminActivatePage/>}/>
        <Route path="/customerRegistration" exact element={<CustomerRegistrationPage/>}/>
        <Route path="/CustomBuild" exact element={<Order/>}  />
        <Route path="/CustomerRequest" exact element={<CusRequestView/>}/>
        <Route path="/CustomerEdit" exact element={<CustomerEdit/>}/>

        <Route path="/packageoverview/:id" exact element={<PackageOverview/>}/>
        <Route path="/View" exact element={<UserForm/>}/>
        <Route path="/activateAdminAccount/:id" exact element={<AdminActivatePage/>}/>
        <Route path="/placeorder" exact element={<PlaceOrder/>}/>
        

        <Route path="/Back" exact element={<UserBackGround/>}/>

      </Routes>
        
    </BrowserRouter>   
    </adminContext.Provider>
  );

}
export default App;