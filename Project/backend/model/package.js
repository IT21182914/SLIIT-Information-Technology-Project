import express from 'express'
import mongoose from '../db/conn.js'
const packageSchema = new mongoose.Schema({
    name : {type : String , required : true},
    price : {type : Number , required : true},
    description : {type : String , required : true},
    duration : {type : String , required : true},
    homeImage : {type : String , required : true},
    modelLink : {type : String , required : true},
    cost : {type : Number , required : true},
    planImage : {type : String , required : true},

    isApproved : {type : Boolean , required : true , default : false}
})

export default packageSchema
