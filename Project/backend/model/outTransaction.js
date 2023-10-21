import express from 'express';
import mongoose from '../db/conn.js';

function date(){
    const now = new Date();
    const year = now.getFullYear().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    const date =  year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    return date;
}

const outTransActionSchema = new mongoose.Schema({
    name : {type : String , required : true},
    cost : {type : Number , required : true},
    date : {type : String , required : true , default : date()},  
    description : {type : String , required : true},
    image : {type : String , required : true},
    transactionId : {type : String , required : true},
})
export default outTransActionSchema;