import express from 'express'
import mongoose from '../db/conn.js'
const financeRequestSchema = new mongoose.Schema({
    cost : {type : Number , required : true},
    name : {type : String , required : true},
    image : {type : String , required : true},
    userId : {type : String , required : true},
    date : {type : Date , required : true , default : Date.now()},
    description : {type : String , required : true},
    approved : {type : Boolean , required : true , default : false},
    declined : {type : Boolean , required : true , default : false},
    note : {type : String , required : false, default : "No note provided yet"},
    section : {type : String , required : true}
})
export default financeRequestSchema
