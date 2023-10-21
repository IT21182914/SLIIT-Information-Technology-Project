import React from 'react'
import CusDashBoard from '../../components/Customers/CusDashBoard'
import {Link, Route, Routes} from 'react-router-dom'
import ViewCustomers from '../../components/Customers/ViewCustomers'
// import ViewOrders from '../../components/Customers/ViewOrders'
import ViewOrders from '../../components/Customers/ViewOrders'
import Order from '../../components/Customers/BuildRequestForm'
import CustomerRegistration from '../../components/Customers/CustomerRegistration'
// import DeclineReasonForm from '../../page/Customers/DeclineReasonForm'

export default function CustomerPage() {
  return (
     <div>


    

       <Routes>
          <Route path="*" element={<CusDashBoard />} />
          <Route path="customerview" element={<ViewCustomers />} />
          <Route path="vieworder" element={<ViewOrders />} />
          <Route path="registerform" element={<CustomerRegistration />} />
          <Route path="orderform" element={<Order />} />
          {/* <Route path="vieworders" element={<ViewOrders />} /> */}

       </Routes>



         














     </div>
  )
}
