import React from 'react'
import ViewEmpCard from '../../components/HR/Admin/ViewEmpCard'
import AddEmployee from '../../components/HR/Admin/AddEmployee'
import EmployeeProfile from '../../components/HR/Admin/EmployeeProfile'
import UpdateEmployee from '../../components/HR/Admin/UpdateEmployee'
import ViewEmployee from '../../components/HR/Admin/ViewEmployee'
import { Routes, Route } from 'react-router-dom'
import HRM from '../../components/HR/Admin/HRM'
import Attendence from '../../components/HR/Admin/Attendence'
import CalculateSalary from '../../components/HR/Admin/CalculateSalary'
import Paysheet from '../../components/HR/Admin/Paysheet'
import EmployeeProfileE from '../../components/HR/Employee/EmployeeProfileE'
import PaysheetE from '../../components/HR/Employee/PaysheetE'
import ChangePwrdE from '../../components/HR/Employee/ChangePwrdE'

export default function HRPage() {
    return (
        <div>

            <Routes>

                <Route path="*" element={<HRM />} />
                <Route path="EmployeeProfile" element={<EmployeeProfile />} />
                <Route path="AddEmployee" element={<AddEmployee />} />
                <Route path="viewemployee" element={<ViewEmployee />} />                
                <Route path="UpdateEmployee" element={<UpdateEmployee />} />
                <Route path="ViewEmpCard" element={<ViewEmpCard />} />
                <Route path ="viewattendance" element = {<Attendence/>}/>
                <Route path ="calculateSalary" element = {<CalculateSalary/>}/>   
                <Route path ="salary" element = {<Paysheet/>}/> 
                
                //for employee
                <Route path ="empprofile" element={<EmployeeProfileE/>}/>
                <Route path ="paysheet" element={<PaysheetE/>}/>
       
            </Routes>

        </div>
    )
}
