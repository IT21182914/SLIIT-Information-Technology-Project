import express from 'express';
import mongoose from '../db/conn.js';
import customerSchema from '../model/customer.js';

import { hashPasswordNew } from './adminController.js';

export const customerModel = mongoose.model("customer",customerSchema);

export function createCustomer(req,res){
    const{firstName , lastName , email , phone , password , gender , image} = req.body;
    let customer = new customerModel()
    customer.firstName = firstName
    customer.lastName = lastName
    customer.email = email
    customer.phone = phone
    customer.passwordHash = hashPasswordNew(password)
    customer.gender = gender
    customer.image = image
    customer.save().then((response)=>{
        res.send(response)
    }).catch((err)=>{
        console.log(err)
    }
    )
    
}
export function loginAsCustomer(req,res){
    const{email , password} = req.body;
    customerModel.findOne({email : email}).then((model)=>{
        if(model != null){
            if(model.passwordHash == hashPasswordNew(password)){
                req.session.userid = model._id
                res.send({                    
                    loginSuccess : true,
                    user : model
                })
            }else{
                res.send({
                    invalidPassword : false
                })
            }
        }else{
            res.send({
                userNotFound : true
            })
        }
    }).catch((err)=>{
        console.log(err)
    }   
    )
}
//this is changed by customer 
export function updateCustomer(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "customer"){
            customerModel.updateOne({_id : req.logInfo.userObject._id},{$set : {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                phone : req.body.phone,
                image : req.body.image
            }}).then((response)=>{
                res.send(response)
            }
            ).catch((err)=>{
                console.log(err)
            }
            )
        }
    }
}
export function changePassword(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "customer"){
            customerModel.updateOne({_id : req.logInfo.userObject._id},{$set : {
                passwordHash : hashPasswordNew(req.body.password)
            }}).then((response)=>{
                res.send(response)
            }
            ).catch((err)=>{
                console.log(err)
            }
            )
        }
    }else{
        res.send(
            "Please login first"
        )
    }
}
export function deleteCustomer(req,res){
    //only admin with customer privilege can delete customer
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "admin"){
            if(req.logInfo.userObject.privileges.includes("customer")){
                customerModel.deleteOne({_id : req.params.id}).then((response)=>{
                    res.send(response)
                }
                ).catch((err)=>{
                    console.log(err)
                }
                )
            }else{
                res.send({
                    privilegeError : true
                })
            }
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }
}

export function getAllCustomers(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "admin"){
            if(req.logInfo.userObject.privileges.includes("customer")){
                customerModel.find().then((response)=>{
                    res.send(response)
                }
                ).catch((err)=>{
                    console.log(err)
                }
                )
            }else{
                res.send({
                    privilegeError : true
                })
            }
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }
}
export function getCustomerById(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "admin"){
            if(req.logInfo.userObject.privileges.includes("customer")){
                customerModel.find({_id : req.params.id}).then((response)=>{
                    res.send(response)
                }
                ).catch((err)=>{
                    console.log(err)
                }
                )
            }else{
                res.send({
                    privilegeError : true
                })
            }
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }
}
//customer delete his own account
export function deleteCustomerByCustomer(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "customer"){
            customerModel.deleteOne({_id : req.logInfo.userObject._id}).then((response)=>{
                res.send(response)
            }
            ).catch((err)=>{
                console.log(err)
            }
            )
        }
    }
}
export function getCustomerBySession(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "customer"){
            customerModel.find({_id : req.logInfo.userObject._id}).then((response)=>{
                res.send(response)
            }
            ).catch((err)=>{
                console.log(err)
            }
            )
        }
    }
}


