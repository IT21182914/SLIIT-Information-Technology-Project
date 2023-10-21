import mongoose from "../db/conn.js";

const feedbackSchema = new mongoose.Schema({
    comment : {type : String , required : true},
    rate : {type : Number , required : true},
    date : {type : Date , required : true , default : Date.now()},
    custId : {type : mongoose.Types.ObjectId , required : true},
    packagId : {type : mongoose.Types.ObjectId , required : true}
});
export default feedbackSchema;
