import express from 'express';
import mongoose from '../db/conn.js';
import { createVehicle, deleteVehicleById, getAllVehicles, updateVehicle } from '../controllers/vehicleController.js';

const vehicleRouter = express.Router();



vehicleRouter.post("/add",createVehicle);
vehicleRouter.get("/",getAllVehicles)
vehicleRouter.delete("/:id",deleteVehicleById)
vehicleRouter.put("/update/:id",updateVehicle)


// customerRouter.post("/",createCustomer);

// customerRouter.get("/",getAllCustomers);

// customerRouter.put("/",updateCustomer);

// customerRouter.delete("/:id",deleteCustomer);

// customerRouter.post("/login",loginAsCustomer)

// customerRouter.delete("/",deleteCustomerByCustomer)

// customerRouter.put("/password",changePassword)

// customerRouter.get("/:id",getCustomerById);

export default vehicleRouter;

