import express from "express"
import { activateAccount, createSuperAdminAccount, createUser, deleteAccount, disableAccount, freshActivateAccount, getAllAdmins, getLoggedInUser, login, logout, updateAdminPrivileges, updateUser } from "../controllers/adminController.js"
const adminRouter = express.Router()
adminRouter.post("/restrict",disableAccount)
adminRouter.post("/login",login)
adminRouter.post("/logout",logout)
adminRouter.post("/activate",freshActivateAccount)
adminRouter.post("/",createUser)
adminRouter.put("/",updateUser)
adminRouter.get("/",getLoggedInUser)
adminRouter.post("/activateAgain",activateAccount)
adminRouter.post("/start",createSuperAdminAccount)
adminRouter.post("/editPrivileges",updateAdminPrivileges)
adminRouter.get("/all",getAllAdmins)
adminRouter.delete("/:id",deleteAccount)

export default adminRouter