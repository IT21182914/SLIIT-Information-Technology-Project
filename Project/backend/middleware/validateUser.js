import { adminModel } from "../controllers/adminController.js";
import { customerModel } from "../controllers/customerController.js";
import { employeeModel } from "../controllers/employeeController.js";

export function validateUserDetails(req,res,next){
   
    const uid = req.session.userid
    req.logInfo = {
        userLogged : false,
        userObject : null,
        userType : "none"
    }

    if(uid){   
        req.logInfo.userLogged = true         
        adminModel.findOne({_id : uid}).then((model)=>{

            if(model != null){                          
                req.logInfo.userObject = model                
                req.logInfo.userType = "admin"
                next()                
            }
            else{                               
                customerModel.findOne({_id : uid}).then((model)=>{
                    if(model != null){                        
                        req.logInfo.userObject = model                        
                        req.logInfo.userType = "customer"
                        next()  
                    }else{
                      employeeModel.findOne({_id : uid}).then((model)=>{
                        if(model != null){
                            req.logInfo.userObject = model
                            req.logInfo.userType = "employee"
                            next()
                        }else{
                            next()
                        }
                      })  
                    }
                })
            }

        })
        
    }else{
        next()
    }
  
      
}