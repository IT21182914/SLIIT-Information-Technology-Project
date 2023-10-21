import mongoose from "../db/conn.js";
const orderSchema = new mongoose.Schema({
    custId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "customer",
    },
    payment : {
        type : Number,
        required : true
    },
    profit : {
        type : Number,
        required : true
    },    

    type : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    estDays : { 
        type : Number,
        required : true

    },
    custManApprove : {
        type : Boolean,
        required : true,
        default : true
    },
    custManDecline : {
        type : Boolean,
        required : true,
        default : false
    },
    documentLink : {
        type : String,
        required : true
    },
    note : {
        type : String,
        required : false
    },
    status : {
        type : String,
        required : true,
        default : "pending"
    }
});
export default orderSchema;

