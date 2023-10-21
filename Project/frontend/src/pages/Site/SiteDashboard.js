import React,{useState} from 'react'
import {Card,Space,Statistic, Button,Calendar,theme} from 'antd'
import {ToolFilled,UserOutlined,CheckCircleFilled,PauseCircleFilled,ClockCircleOutlined,InfoCircleFilled, PrinterOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Link, Routes, Route } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import NewSite from '../../components/Site/NewSite'
import jsPDF from 'jspdf'
import HoldSite from '../../components/Site/HoldSite'
import EmployeeDetails from '../../components/Site/Employee'
import axios from 'axios'
import OngoingSite from '../../components/Site/OngoingSite'
//import Calendar from 'react-calendar'

function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Extract the year, month, and day from the Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  // Return the formatted string
  return `${year}-${month}-${day}`;
}
function SiteDashboard() {

  const navigate = useNavigate()

   {/**line chart */}
  const data = [
    { name: 'Site 1', progress: 50 },
    { name: 'Site 2', progress: 75 },
    { name: 'Site 3', progress: 25 },
    { name: 'Site 4', progress: 90 },
    { name: 'Site 5', progress: 40 },
    { name: 'Site 6', progress: 80 },
    { name: 'Site 7', progress: 60 },
    { name: 'Site 8', progress: 82 },
  ];

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
 
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  }
 


  return (
    <div>    
      {/* 4 site Types */}
    <Space className='Types' style={{marginLeft:'5%',marginBottom:'2%'}}>

      {/* site Pending Button */}

        {/* New site Button */}
        <Link to={'newSite'}>
        <Button
       style={{
            borderRadius:10,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff",
            

          }}>
        <DashboardCard
          icon={
            <ClockCircleOutlined
              style={{
                color:"#B2A4FF",
                borderRadius:20,
                fontSize:30,
              }}
            />
          }
          title={"Pending Site"} 
          value={5}
          /></Button>
          </Link>
        {/* ongoing Button */}
      <Link to={'ongoingSite'}>
      <Button   
         style={{
            borderRadius:10,
            fontSize:24,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff" 

          }}>
        <DashboardCard 
          icon={
            <PauseCircleFilled
              style={{
                color:"#FFBF9B",
                borderRadius:20,
                fontSize:30,
                backgroundColor:"#ffffff",
                border:"1px solid #ffffff" 
              }}
            />
          }
          title={"Ongoing Sites"}
          value={10}
        /></Button>
        </Link>
      
          

         
        {/* Complete Sites Button */}
        <Link to={'completeSite'}>
        <Button
        style={{
            borderRadius:10,
            fontSize:24,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff" 

          }}>
        <DashboardCard 
          icon={
            <CheckCircleFilled
              style={{
                color:"#0E8388",
                borderRadius:20,
                fontSize:30,
              }}
            />
          }
          title={"Complete Sites"} 
          value={100}
          /></Button>
          </Link>
         {/*Hold Site button */}
         
         <Button 
         onClick={ () => {
          const doc = new jsPDF();
          const tableColumn = ["Site id", "site status", "location", "start date", "end date"];
          const tableRows = [];
      
          // arrayLists.map((packages) => {
          //   const Packagedata = [packages.name, packages.price, packages.description, packages.duration, packages.cost];
          //   tableRows.push(Packagedata);
          // });
          
          axios.get("http://localhost:5000/site").then((res) => {
            res.data.map((site) => {
              const Sitedata = [
                site.siteId,
                site.siteState,
                site.location,
                formatDate(site.start),
                formatDate(site.end)
                
              ];
              tableRows.push(Sitedata);
            });
            doc.autoTable(tableColumn, tableRows, { startY: 20 });
          doc.save("Sites.pdf");
          });
      
          
        
      }}
         style={{
            borderRadius:10,
            fontSize:24,
            padding:7,
            paddingBottom:120,
            backgroundColor:"#ffffff",
            border:"1px solid #ffffff" 

          }}>
            
        <DashboardCard 
          icon={
            <PrinterOutlined
              style={{
                color:"#ED2B2A",
                borderRadius:20,
                fontSize:30,
              }}
            />          
          }
          title={"Site report"}          
        /></Button>
        
         
        </Space>
        <Space className='sitetype' direction='horizontal' >

        
                   {/* Line Chart */}
              
              <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>

              <Link to={'emloyeedetails'}>
              <Button  
                style={{
                    borderRadius:10,
                    fontSize:24,
                    padding:7,
                    paddingBottom:120,
                    backgroundColor:"#ffffff",
                    border:"1px solid #ffffff" 

                  }}>
              <DashboardCard 
                  icon={<UserOutlined
                    style={{
                      fontSize:50,
                      color:"#FEB139",
                    }}/>
                  }
                  title={"Employee List"}
                  value={500}
                /></Button>
                </Link>
                <Link to={'equipmentdetails'}>
            <Button 
                style={{
                    borderRadius:10,
                    fontSize:24,
                    padding:7,
                    paddingBottom:120,
                    backgroundColor:"#ffffff",
                    border:"1px solid #ffffff" 

                  }}>
                <DashboardCard 
                  icon={<ToolFilled
                    style={{
                      fontSize:50,
                      color:"#051367",

                    }}/>
                  }
                  title={"Equipment List"}
                  value={20}
                /></Button>
                </Link>

              

           
      </Space>

      <div className="w-[100%] flex flex-row justify-center h-[75%] overflow-y-scroll">
            <Routes>
                
                <Route path="newSite" element={<NewSite/>} />
                <Route path="ongoingSite" element={<OngoingSite/>} />
                <Route path="holdSite" element={<HoldSite/>} />
                <Route path="emloyeedetails" element={<EmployeeDetails/>} />
            </Routes>
        </div>

    </div>

  )
}

 {/* Dashboard card */}
function DashboardCard({title,value, icon}){
  return(
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value}/>
      </Space>
    </Card>
  )
}


export default SiteDashboard