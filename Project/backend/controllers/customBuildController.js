import mongoose from "../db/conn.js";
import customBuild from "../model/customBuild.js";
import customerSchema from "../model/customer.js";
import express from "express";
export const customBuildModel = mongoose.model("customBuild", customBuild)


//only logged in customer create cutom build in database
export function createCustomBuild(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "customer") {
            let customBuilder = new customBuildModel()
            customBuilder.customerID = req.logInfo.userObject._id
            customBuilder.description = req.body.description
            customBuilder.documentLink = req.body.documentLink
            customBuilder.budget = req.body.budget
            customBuilder.save().then((response) => {
                res.send(response)
            }).catch((err) => {
                console.log(err)
            })
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }else{
        res.send({
            loginError : true
        })
    }
}

//customer logged in and delete own customBuild by id
export function deleteCustomBuild(req,res){
    if(req.logInfo,userLogged){
        if(req.logInfo.userType == "customer"){
            customBuildModel.deleteOne({_id : req.params.id , customerId : req.logInfo.userObject._id}).then((response)=>{
                res.send(response)
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }else{
        res.send({
            loginError : true
        })
    }
}

//customer logged in and get all customBuild by id
export function getAllCustomBuild(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "customer"){
            customBuildModel.find({customerID : req.logInfo.userObject._id}).then((response)=>{
                res.send(response)
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }else{
        res.send({
            loginError : true
        })
    }
}

//customer logged in and get customBuild by _id
export function getCustomBuildById(req,res){
    if(req.logInfo,userLogged){
        if(req.logInfo.userType == "customer"){
            customBuildModel.findOne({_id : req.params.id , customerId : req.logInfo.userObject._id}).then((response)=>{
                res.send(response)
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }else{
        res.send({
            loginError : true
        })
    }
}

//admin with package in privileges can edit status and responseDetails of customBuild
export function editCustomBuild(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "admin"){
            if(req.logInfo.userObject.privileges.include("package")){
                customBuildModel.findOneAndUpdate({_id : req.body.customBuildId},{status : req.body.status , responseDetails : req.body.responseDetails , estDays : req.body.estDays,profit : req.body.profit}).then((response)=>{
                    res.send(response)
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }else{
        res.send({
            loginError : true
        })
    }
}

//admin with package in privileges can get all customBuild
export function getAllCustomBuildsAdmin(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "admin"){
            if(req.logInfo.userObject.privileges.include("package")){
                customBuildModel.find().then((response)=>{
                    res.send(response)
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }else{
        res.send({
            loginError : true
        })
    }
}
//admin with package in privileges can get customBuild by _id
export function getCustomBuildByIdAdmin(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "admin"){
            if(req.logInfo.userObject.privileges.include("package")){
                customBuildModel.findOne({_id : req.params.id}).then((response)=>{
                    res.send(response)
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }else{
            res.send({
                accountTypeError : true
            })
        }
    }else{
        res.send({
            loginError : true
        })
    }
}