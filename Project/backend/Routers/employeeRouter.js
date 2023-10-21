import express from 'express';
import mongoose from '../db/conn.js';
import {addNewEmployee, deleteEmployee, getAllEmployees, getAttendanceByDate, getEmployeeById, getUsersCount, loginAsEmployee, markAttendanceByDate, updateEmployee, updateEmployeeAdvance} from '../controllers/employeeController.js';  

const employeeRouter = express.Router();
 

employeeRouter.post("/add",addNewEmployee);
employeeRouter.post("/login",loginAsEmployee)
employeeRouter.get("/",getAllEmployees)
employeeRouter.delete("/:id",deleteEmployee)
employeeRouter.put("/:id",updateEmployee)
employeeRouter.put("/advance/:id",updateEmployeeAdvance)
employeeRouter.put("/getOneEmp/:id",getEmployeeById)

employeeRouter.get("/userCount",getUsersCount)
employeeRouter.get("/dayAttendence",getAttendanceByDate)
employeeRouter.post("/markAttendance/:id",markAttendanceByDate)
export default employeeRouter;
