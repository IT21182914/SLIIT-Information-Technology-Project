import mongoose from "../db/conn.js";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based (0-11)
const date = currentDate.getDate();
const dateString = year + "-" + month + "-" + date;

const employeeSchema = mongoose.Schema({
    empId : {type : String , required : true},
    email : {type : String , required : true},
    name : {type : String , required : true},
    phone : {type : String , required : true},
    gender : {type : String , required : true},
    nic : {type : String , required : true},
    image : {type : String , required : true , default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw2qGhp9969H3FCOcV8aPgRA&ust=1683548221055000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiipv-X4_4CFQAAAAAdAAAAABAE"},
    password : {type : String , requred : true},
    hiredDate : {type : String , required : true , default : dateString},
    advance : {type : Number , required : true , default : 0},
    workDays : {type : Number , required : true , default : 0},
    salary : {type : Number , required : true , default : 0},
    isMonthly : {type : Boolean , required : true , default : true},
    lastMonthAdvance : {type : Number , required : true , default : 0},
    lastMonthWorkdays  : {type : Number , required : true , default : 0},
    lastMonthBonus : {type : Number , required : true , default : 0},
    password : {type : String , required : true}


})

export default employeeSchema