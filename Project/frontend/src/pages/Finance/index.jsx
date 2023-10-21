import React from 'react'
import FinanceDashboard from '../../components/Finance/FinanceDashboard'
import { Link,Routes,Route } from 'react-router-dom'
import GenerateReport from './GenerateReport'
import PendingRequest from './PendingRequest'
import Transactions from './Transactions'
import UpdateTranc from '../../components/Finance/UpdateTranc'

export default function FinanceDashBoardLinker() {
  return (
    <div>        
        <Routes>
                
            <Route path="*" element={<FinanceDashboard/>} />
            <Route path="GenerateReport" element={<GenerateReport/>} />
            <Route path="PendingRequest" element={<PendingRequest/>} />
            <Route path="Transaction/*" element={<Transactions/>} />
            <Route path="update" element={<UpdateTranc/>} />

        </Routes>
    </div>
  )
}

