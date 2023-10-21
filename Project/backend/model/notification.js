import mongoose from '../`db/conn.js'
const notificationSchema = new mongoose.Schema({
    title : {type : String , required : true},
    description : {type : String , required : true},
    date : {type : Date , required : true , default : Date.now()},
    adminId : {type : mongoose.Schema.Types.ObjectId , required : true},
    adminFirstName : {type : String , required : true},
    adminLastName : {type : String , required : true},
    adminImg : {type : String , required : true},
    section : {type : String , required : true}
})
export default notificationSchema;
