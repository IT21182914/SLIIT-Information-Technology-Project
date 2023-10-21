import express from 'express';
import mongoose from '../db/conn.js';
import { createFinanceBarChart, getAllFinanceBarChart, getFinanceBarChartByYear } from '../controllers/FinanceBarController.js';
import{getAllOutTransactions,updateOutTransaction,deleteOutTransaction} from '../controllers/outTransactionController.js'

const financeRouter = express.Router();

financeRouter.post("/",createFinanceBarChart);
financeRouter.get("/bar",getFinanceBarChartByYear);
financeRouter.get("/",getAllFinanceBarChart);

export default financeRouter;