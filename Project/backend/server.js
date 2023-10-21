import  express from 'express'
import path,{dirname} from 'path'
import cors from 'cors'
import sessions from 'express-session'
import cookieParser from 'cookie-parser'
import  {fileURLToPath} from 'url'
import mongoose from './db/conn.js'
import { validateUserDetails } from './middleware/validateUser.js'
import adminRouter from './Routers/adminRouter.js'
import equipmentRouter from './Routers/equipmentRouter.js'
import packagesRouter from './Routers/packagesRouter.js'
import financeRouter from './Routers/financeRouter.js'
import customerRouter from './Routers/customerRouter.js'
import customBuildRouter from './Routers/customBuildRouter.js'
import employeeRouter from './Routers/employeeRouter.js'
import orderRouter from './Routers/orderRouter.js'
import financeRequestRouter from './Routers/financeRequestRouter.js'
import transactionRouter from './Routers/TransactionRouter.js'
import siteRouter from './Routers/siteRouter.js'
import vehicleRouter from './Routers/vehicleRouter.js'



const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express() 
const PORT = 5000;

  
app.use(cors({
    credentials : true,
    origin : "http://localhost:3000"
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname))
app.use(cookieParser())
const oneDay = 1000*60*60*24

app.use(sessions({
    secret : "seccrretkeylogger",
    saveUninitialized : false,
    cookie : {maxAge  : oneDay},
    resave : true

}))
app.use(validateUserDetails)
app.use("/admin",adminRouter)
app.use("/equipment",equipmentRouter)
app.use("/packages",packagesRouter)
app.use("/finance",financeRouter)
app.use("/transaction",transactionRouter)
app.use("/financeRequest",financeRequestRouter)
app.use("/customer",customerRouter)
app.use("/customOrder",customBuildRouter);
app.use("/employee",employeeRouter)
app.use("/order",orderRouter)
app.use("/site",siteRouter)
app.use("/vehicle",vehicleRouter)
app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    }else
        console.log("Error occured, sever can't start",error)
});

























































