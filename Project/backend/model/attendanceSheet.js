import express from  'express'
import mongoose from '../db/conn.js'

const date = new Date(); // Replace this with your Date object

const day = date.getDate();
const month = date.getMonth() + 1; // Months are zero-based, so we add 1
const year = date.getFullYear();

const today = day + "/" + month + "/" + year;

const attendanceSchema = new mongoose.Schema({
    date  : {type : String , required : true , default : today},
    empId : {type : String , required : true , default : "0000"},
})

export default attendanceSchema