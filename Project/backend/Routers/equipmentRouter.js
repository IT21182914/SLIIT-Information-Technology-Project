import express from 'express';
import mongoose from '../db/conn.js';
import { createEquipment,getAllEquipment,deleteEquipment, updateEquipment, getTotalValue} from '../controllers/equipmentController.js';

const equipmentRouter = express.Router();



equipmentRouter.post("/add",createEquipment);
equipmentRouter.get("/",getAllEquipment);
equipmentRouter.delete("/:id",deleteEquipment);
equipmentRouter.put("/update/:id",updateEquipment)
equipmentRouter.get("/total-value",getTotalValue)
// customerRouter.post("/",createCustomer);

// customerRouter.get("/",getAllCustomers);

// customerRouter.put("/",updateCustomer);

// customerRouter.delete("/:id",deleteCustomer);

// customerRouter.post("/login",loginAsCustomer)

// customerRouter.delete("/",deleteCustomerByCustomer)

// customerRouter.put("/password",changePassword)

// customerRouter.get("/:id",getCustomerById);

export default equipmentRouter;

