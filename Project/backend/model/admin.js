import mongoose from "../db/conn.js"
const adminSchema = mongoose.Schema({
    email : {type : String , required : true},
    passwordHash : {type : String , required : true},
    privileges : {type : [String] , required : true},
    initialized : {type : Boolean , required : true, default : false},
    activated : {type : Boolean , required : true ,default : true},
    lastLogin : {type : Date , default : Date.now},
    firstName : {type : String , required : true},
    lastName : {type : String, required : true},
    nic : {type : String , required : true},
    phone : {type : String , required : true},
    gender : {type : String , required : false},
    image : {type : String , required : false,default : "https://www.w3schools.com/howto/img_avatar.png"},
})
export default adminSchema;