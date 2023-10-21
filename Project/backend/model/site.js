import mongoose from "../db/conn.js";

const siteSchema = new mongoose.Schema({
    custId : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : "customer"
    },
    siteId : {
        type : String,
        required : true,
    },
    location : {
        type : String,
        required : true
    },
    siteState : {
        type : String,
        required : true,
        default : "pending"
    },
    start : {
        type : Date,
        required : true,
        default : Date.now()
    },
    end : { 
        type : Date,
        required : true,
        default : Date.now()

    },
    notes : {
        type : String,
        required : false
    }

});
export default siteSchema;
