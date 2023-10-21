import express from 'express';
import mongoose from '../db/conn.js';

const customerRouter = express.Router();

import { changePassword, createCustomer, deleteCustomer, deleteCustomerByCustomer, getAllCustomers, getCustomerById, getCustomerBySession, loginAsCustomer, updateCustomer } from '../controllers/customerController.js';

customerRouter.post("/",createCustomer);

customerRouter.get("/",getAllCustomers);

customerRouter.get("/current",getCustomerBySession)

customerRouter.put("/",updateCustomer);

customerRouter.delete("/:id",deleteCustomer);

customerRouter.post("/login",loginAsCustomer)

customerRouter.delete("/",deleteCustomerByCustomer)

customerRouter.put("/password",changePassword)

customerRouter.get("/:id",getCustomerById);

export default customerRouter;

