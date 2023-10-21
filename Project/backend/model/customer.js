import mongoose from "../db/conn.js";
const customerSchema = mongoose.Schema({
    email : {type : String , required : true},
    passwordHash : {type : String , required : true},
    firstName : {type : String , required : true},
    lastName : {type : String, required : true},
    phone : {type : String , required : true},
    gender : {type : String , required : false},
    image : {type : String , required : false}
})
export default customerSchema;