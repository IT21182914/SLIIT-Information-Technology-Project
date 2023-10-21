import express from 'express'
import mongoose from '../db/conn.js'
import { approveFinanceRequest, createFinanceRequest, declineFinanceRequest, getAllFinanceRequests, getAllFinanceRequestsByUser } from '../controllers/financeRequestController.js'

const financeRequestRouter = express.Router()

financeRequestRouter.post("/post", createFinanceRequest)
financeRequestRouter.put("/approve/:id", approveFinanceRequest)
financeRequestRouter.put("/decline/:id", declineFinanceRequest)
financeRequestRouter.get("/view", getAllFinanceRequests)
financeRequestRouter.get("/show", getAllFinanceRequestsByUser)


export default financeRequestRouter;

