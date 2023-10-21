import React from 'react'
import styles from './Dashboard.module.scss'
import DashboardManagement from './Pictures/Dashboard.png'
import AccountManagement from './Pictures/AccountManagement.png'
import SiteManagement from './Pictures/SiteManagement.png'
import EquipmentManagement from './Pictures/EquipmentManagement.png'
import FinanceManagement from './Pictures/FinanceManagement.png'
import HRManagement from './Pictures/HRManagement.png'
import TransportManagement from './Pictures/TransportManagement.png'
import CustomerManagement from './Pictures/CustomerManagement.png'
import PackageManagement from './Pictures/PackageManagement.png'
import { Link } from 'react-router-dom'


export default function Dashboard(props) {
  const activeTile = props.activeTile
  return (

    <div>      
      <div className="w-36 h-max fixed -top-16 3xl:top-32 max-2xl:left-7 bg-white rounded-3xl pt-2 pb-2 pl-3 pr-3 max-3xl:scale-65 flex-col flex 
       items-center max-2xl:scale-54 max-3xl:-top-20 3xl:left-32 mr-7 2xl:-top-8 2xl:left-20 ">
        
        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Dashboard'?"#FCBF49":""}}>
          <Link to={"Dashboard"}>    
            <img src={DashboardManagement} alt='DashboardManagement' />
          </Link>
          <span className={styles.SectionNames} >Dashboard</span>
        </div>
        
        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Finance'?"#FCBF49":""}}>
          <Link to={"Finance"}>  
            <img src={FinanceManagement} alt='FinanceManagement'  />
          </Link>
          <span className={styles.SectionNames} >Finance</span>
        </div>

        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Site'?"#FCBF49":""}}>
          <Link to={"Site"}> 
            <img src={SiteManagement} alt='SiteManagement' />
          </Link>
          <span className={styles.SectionNames} >Sites</span>
        </div>

        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Equipment'?"#FCBF49":""}}>
          <Link to={"Equipment"}>
            <img src={EquipmentManagement} alt='EquipmentManagement' />
          </Link>
          <span className={styles.SectionNames} >Equipments</span>
        </div>

        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Customer'?"#FCBF49":""}}>
          <Link to={"Customer"}>
            <img src={CustomerManagement} alt='CustomerManagement' />
          </Link>
          <span className={styles.SectionNames} >Customers</span>
        </div>

        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='HR'?"#FCBF49":""}}>
          <Link to={"HR"}> 
            <img src={HRManagement} alt='HRManagement' />
          </Link>
          <span className={styles.SectionNames} >HR</span>
        </div>

        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Package'?"#FCBF49":""}}>
          <Link to={"Package"}> 
            <img src={PackageManagement} alt='PackageManagement' />
          </Link>
          <span className={styles.SectionNames} >Packages</span>
        </div>

        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Transport'?"#FCBF49":""}}>
          <Link to={"Transport"}> 
            <img src={TransportManagement} alt='TransportManagement' />
          </Link>
          <span className={styles.SectionNames} >Transport</span>
        </div>

        <div className={styles.DashIconWrapper} style={{backgroundColor : activeTile=='Account'?"#FCBF49":""}}>
          <Link to={"Account"}>
            <img src={AccountManagement} alt='AccountManagement' />
          </Link>
          <span className={styles.SectionNames} >Accounts</span>
        </div>

      </div>

    </div>
  )
}

