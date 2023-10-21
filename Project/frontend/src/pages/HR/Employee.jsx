import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmployeeProfileE from '../../components/HR/Employee/EmployeeProfileE'
import PaysheetE from '../../components/HR/Employee/PaysheetE'
import ChangePwrdE from '../../components/HR/Employee/ChangePwrdE'

export default function EmployeePages() {
    return (
        <div>

            <Routes>

                //for employee
                <Route path ="*" element={<EmployeeProfileE/>}/>
                <Route path ="paysheet" element={<PaysheetE/>}/>
                <Route path ="changepassword" element={<ChangePwrdE/>}/>   

            </Routes>

        </div>
    )
}
