import mongoose from "../db/conn.js";
import customerSchema from "./customer.js";
const customBuild = mongoose.Schema({
    customerID : {type : mongoose.Types.ObjectId , required : true , ref : "customer"},
    description : {type : String , required : true},
    documentLink : {type : String , required : true},
    status : {type : String , required : true , default : "pending"},
    budget  : {type : Number , required : true},
    responseDetails : {type : String , required : false , default : "No responses yet"},
    profit : {type : Number , required : true , default : 0},
    estDays : {type : Number , required : true , default : 0}
})
export default customBuild;