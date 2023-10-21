import{React, useState, useEffect } from 'react'
import styles from './FinanceDashboard.module.scss'
import Barchart from './Barchart'
// import{UserData} from './Data'
import { Link, Routes, Route } from 'react-router-dom'
import UpdateTranc from './UpdateTranc'
import axios from 'axios'

export default function FinanceDashboard() {
 // eslint-disable-next-line
  const[userData, setUserData] = useState([]);


//get data from rea.data and set it to userData

  useEffect(() => {
    axios.get("http://localhost:5000/finance/bar")
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const chartData = {
    labels: userData.map((data) => data._id),
    datasets: [
      {
        label: "Incomes",
        data: userData.map((data)=>{return ((data.totalIncome/(data.totalIncome+data.totalExpenses)) *100)}),
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
        barPercentage: 0.4,
      },
      {
        label: "Expenses",
        data: userData.map((data)=>{return ((data.totalExpenses/(data.totalIncome+data.totalExpenses)) *100)}),
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
        barPercentage: 0.4,
      },
    ],
  };

  console.log(userData);




  return (

    <div className={styles.FDOutterLayer}>   

      <div className={styles.contentWrapper}>

        <div className={styles.BarchartWrapper}>

          <div className={styles.Barchart}>
            <Barchart chartData={chartData}/>
          </div>

        </div>

        <div className={styles.buttonWrapper}>
          <Link to="PendingRequest"><button className={styles.one+' '+ styles.button}>Pending Request</button></Link>
          <Link to="GenerateReport"><button className={styles.button}>GenerateReports</button></Link>
          <Link to="Transaction"><button className={styles.button}>Transactions</button></Link>
        </div>
        
      </div>
      <Routes>
        {/* <Route path="/Finance/PendingRequest" element={<PendingRequest/>}/> */}
        {/* <Route path="GenerateReport/*" element={<GenerateReport/>}/> */}
        {/* <Route path="/Finance/Transaction" element={<Transaction/>}/> */}
        
            <Route path="update" element={<UpdateTranc/>} />
        
      </Routes>

    </div>
  )
}


