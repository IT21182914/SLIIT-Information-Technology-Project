import React from 'react';
import ManagementCard from '../../components/Dashboard/ManagementCard';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-4">
      <Link to={"Finance"}> 
        <ManagementCard 
          icon="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          title="Account Manager"
          works={["Add Account", "Edit privileges", "Delete Account"]}
        />
        </Link>
        <ManagementCard 
          icon="https://plus.unsplash.com/premium_photo-1661776608612-523ebf5a19d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Package Manager"
          works={["Add Package", "Edit Package", "Add Add-ons"]}
        />
        <ManagementCard 
          icon="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Finance Manager"
          works={["Pending Request", "Transactions", "Payments"]}
        />
        <ManagementCard 
          icon="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          title="Customer Manager"
          works={["Customer Details", "Order Details", "Customer Feedbacks"]}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        <ManagementCard 
          icon="https://plus.unsplash.com/premium_photo-1679936310136-71330fad74b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="HR Manager"
          works={["Employee Details", "Employee Availability", "Calculate Salary"]}
        />
        <ManagementCard 
          icon="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Site Manager"
          works={["Site Overview", "Add new site", "Hold site"]}
        />
        <ManagementCard 
          icon="https://plus.unsplash.com/premium_photo-1663047180256-ba3bb085c92f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Equipment Manager"
          works={["View Equipments", "Edit Equipment", "Add Equipment"]}
        />
        <ManagementCard 
          icon="https://images.unsplash.com/photo-1677888039303-22bc5a8c557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Transport Manager"
          works={["Vehicle details", "Add Vehicle", "Update Vehicle"]}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
