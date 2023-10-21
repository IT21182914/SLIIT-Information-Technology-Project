import express from 'express'
import { createOrder, cusManApproveOrder, cusManDeclineOrder, getCustomersOrder, getSiteOrders, startSite } from '../controllers/orderController.js'
const orderRouter = express.Router()
orderRouter.post("/",createOrder)
orderRouter.get("/",getCustomersOrder)
orderRouter.get("/pending",getSiteOrders)
orderRouter.put("/approve",cusManApproveOrder)
orderRouter.put("/reject",cusManDeclineOrder)
orderRouter.post("/start",startSite)


export default orderRouter;