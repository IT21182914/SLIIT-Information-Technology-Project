import mongoose from '../db/conn.js'
import express from "express";

const date = new Date();
const financeBarChartSchema = new mongoose.Schema({    
    year : {type : String , required : true , default : date.getFullYear()},    
    expences : {type : String , required : false,default : 0},
    income : {type : String , required : false,default : 0},
})
export default financeBarChartSchema