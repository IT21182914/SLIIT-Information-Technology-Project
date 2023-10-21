import adminSchema from "../model/admin.js";
import mongoose from "../db/conn.js";
import crypto from "crypto"
import nodemailer from 'nodemailer'
export const adminModel = mongoose.model("admin",adminSchema);


const transport = nodemailer.createTransport(
    
    {   
        service: "gmail",     
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "samodconstructions68@gmail.com",
            pass: "kgyspqmqcxnaojhz"
        }
    }
)
export function  createUser(req,res){
    if(req.logInfo.userLogged ){
        if(req.logInfo.userType == "admin")
        {    
            if(req.logInfo.userObject.privileges.includes("account"))
            {
                const {email ,nic} = req.body;

                let admin = new adminModel()
                admin.email = email
                admin.passwordHash = hashPasswordNew("1234");
                admin.privileges = []
                admin.activated = true
                admin.firstName = "New"
                admin.lastName = "User"
                admin.nic = nic
                admin.phone = "none"
                admin.gender = ""
                
                admin.save().then((response)=>{
                    
                    const message = {
                        from: "samod@gmail.com",
                        to: email,
                        subject: "Admin account activation key",
                        text: `Congratulations!!! You have been hired as a IT admin of Samod constructions (pvt) Ltd.\n
                                click and move to the following link to activate your admin account\n
                                http://localhost:3000/activateAdminAccount/${response._id}`
                    }
                    transport.verify().then(console.log).catch(console.error)
                    transport.sendMail(message, (err, info) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(info);
                        }
                    });
                    res.send(response)
                }).catch((err)=>{
                    console.log(err)
                    res.send({
                        failedStatus : true
                    })
                })
            }else{
                res.send({
                    failedStatus : true
                })
            }
            
        }else{
            res.send({
                type : true
            })
        }
    }else{
        res.send({
            logerror : true
        })
    }
}
export function activateAdminAccount(req,res){
    const {adminId,password,firstName, lastName, nic, phone, gender} = req.body
    adminModel.update({_id : adminId,initialized : false},{$set : {
        initialized : true,
        passwordHash : hashPasswordNew(password),
        firstName : firstName,
        lastName : lastName,
        nic : nic,
        phone : phone,
        gender : gender
    }}).then((response)=>{
        res.send(response)
    }
    ).catch((err)=>{
        console.log(err)
    }
    )
}

export function createSuperAdminAccount(req,res){

    let admin = new adminModel()
    admin.firstName = "Samod"
    admin.lastName = "Samarakoon"
    admin.email = "samod@gmail.com",
    admin.passwordHash = hashPasswordNew("1234");
    admin.privileges = ["account"]
    admin.activated = true
    admin.nic = "123456789V"
    admin.phone = "0712345678"
    admin.gender = "male"
    admin.save().then((response)=>{
        res.send(response)
    }).catch((err)=>{
        console.log(err)
    })
}

export function  updateUser(req,res){
    if(req.logInfo.userLogged){
        const{email ,password, privileges, firstName, lastName, nic,phone,gender} = req.body;
        
        adminModel.updateOne({_id : req.logInfo.userObject._id},{$set : {
            email :email,
            password  :  hashPasswordNew(password),
            privileges : privileges,
            firstName : firstName,
            lastName : lastName,
            nic : nic,
            phone :phone,
            gender : gender
        }}).then((response)=>
        {
            res.send(response)
        })
    }else{
        req.send({
            loginError : true
        })
    }
    
}
export function disableAccount(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userObject.privileges.includes("account")){
            const {adminId} = req.body
            adminModel.updateOne({_id : adminId},{$set : {
                activated : false
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
export function activateAccount(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userObject.privileges.includes("account")){
            const {adminId} = req.body
            adminModel.updateOne({_id : adminId},{$set : {
                activated : true
            }}).then((response)=>{
                res.send(response)
            }
            ).catch((err)=>{
                console.log(err)
            }
            )
        }else{
            req.json({
                privilegeError : true
            })
        }
    }
}
export function login(req,res){
    let result = {
        validated : false,
        status : "user_not_found",
        id    : ""
    }
    adminModel.findOne({email : req.body.email}).then((model)=>{
        if(model != null){
            result.status = "incorrect_password" 

            if(model.passwordHash == hashPasswordNew(req.body.password)){                
                req.session.userid = model._id
                req.logInfo.userLogged = true
                result.status = "correct_password"
                result.validated = true    
                result.id = model._id
                result.user = model                          
            }
        }
        res.json(result)

    }); 
}
export function hashPasswordNew(password){
    return crypto.pbkdf2Sync(password, "no_salt",  
        1000, 64, `sha512`).toString(`hex`); 
    
}
export function loginUser(req,res){
    let result = {
        validated : false,
        status : "user_not_found",
        id    : ""
    }
    adminModel.findOne({email : req.body.email}).then((model)=>{
        if(model != null){
            result.status = "incorrect_password" 

            if(model.passwordHash == hashPasswordNew(req.body.password)){                
                req.session.userid = model._id
                req.logInfo.userLogged = true
                result.status = "correct_password"
                result.validated = true    
                result.id = model._id                          
            }
        }
        res.json(result)

    });     
}
export function logout(req,res){
    if(req.logInfo.userLogged){
        
        req.session.destroy((result)=>{
            console.log("session ended") 
            res.send("logged out successfully")   
        })
    }else{
        res.send("No user accounts found")
    }
}
export function getLoggedInUser(req,res){
    
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == "customer"){            
            let user =  req.logInfo.userObject.toObject()
            
            user.type = "customer"
            res.send(user)
        }else if(req.logInfo.userType == "admin"){            
            let user =  req.logInfo.userObject.toObject()
            
            user.type = "admin"
            res.send(user)
        }else if(req.logInfo.userType == "employee"){
            let user = req.logInfo.userObject.toObject()
            user.type = "employee"
            res.send(user)
        }
        
        
    }else{
        res.send({
            loginError : true
        })
    }
}
export function freshActivateAccount(req,res){
    const {userId, newPassword , firstName , lastName , phone , gender , image} = req.body
    adminModel.updateOne({_id : userId,initialized : false},{$set : {
        passwordHash : hashPasswordNew(newPassword),
        firstName : firstName,
        lastName : lastName,        
        phone :phone,
        gender : gender,
        image : image,
        initialized : true
    }}).then((response)=>{
        res.send({
            accountActivated : true
        })
    })
}
export function deleteAccount(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userObject.privileges.includes("account")){
            const userId = req.params.id
            adminModel.deleteOne({_id : userId}).then((response)=>{
                res.send(response)
            })
        }
    }
}
export function getAllAdmins(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userObject.privileges.includes("account")){
            adminModel.find({}).then((response)=>{
                res.send(response)
            })
        }
    }
}
export function getAdminById(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userObject.privileges.includes("account")){
            const adminId = req.body.adminId
            adminModel.findOne({_id : adminId}).then((response)=>{
                res.send(response)
            })
        }
    }
}
export function gtEmailAvailable(req,res){
    const email = req.body.email
    adminModel.findOne({email : email}).then((response)=>{
        if(response == null){
            res.send({
                emailAvailable : true
            })
        }else{
            res.send({
                emailAvailable : false
            })
        }
    })
}
//only admin type users with account in priveleges can update priveleges of other admins by id
export function updateAdminPrivileges(req,res){
    if(req.logInfo.userLogged){
        if(req.logInfo.userObject.privileges.includes("account")){
            const {adminId, privileges} = req.body
            adminModel.updateOne({_id : adminId},{$set : {
                privileges : privileges
            }}).then((response)=>{
                res.send(response)
            })
        }
    }
}


