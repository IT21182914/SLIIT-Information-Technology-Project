import mongoose from "../db/conn.js";
import orderSchema from "../model/order.js";
import { createInTransaction, createInTransactionFunction } from "./inTransactionController.js";
import { createSiteFunction } from "./siteController.js";
import { createSite } from "./siteController.js";

const orderModel = new mongoose.model("order", orderSchema);

//only customer can make a order
export const createOrder = async (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "customer") {
        //destruct req and create new orderModel in database
        const {
            payment,
            profit,
            type,
            description,
            estDays,
            documentLink,
            note,
        } = req.body;

        const date = new Date();
        const transactionId =
          "TI-" +
          date.getFullYear().toString().substring(2,4) +
          date.getMonth() +
          date.getDate() +
          date.getHours() +
          date.getMinutes() +
          date.getSeconds() +
          date.getMilliseconds();


        const newOrder = new orderModel();
        newOrder.payment = payment;
        newOrder.profit = profit;
        newOrder.type = type;
        newOrder.description = description;
        newOrder.estDays = estDays;
        newOrder.documentLink = documentLink;
        newOrder.note = note;
        newOrder.custId = req.logInfo.userObject._id;
        newOrder.transactionId = transactionId;
        newOrder
            .save()
            .then((result) => {
            res.send(result);
            })
            .catch((err) => {
            res.status(500).json({ message: "Error creating order" });
            });
        }
    }
}
//admin with customer in privileges update order by id and set only custManApprove to true and note
export const cusManApproveOrder = async (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.includes("customer")) {
            //destruct req and update orderModel in database
            const { note } = req.body;
            //update order by id
            orderModel
            .updateOne(
                { _id: req.body.id },
                {
                $set: {
                    custManApprove: true,
                    note: note,
                },
                }
            )
            .then((result) => {
                orderModel.findById(req.body.id).then((result) => {
                    createInTransactionFunction(result.profit , result.description, result.payment).then((result) => { 
                        res.send(result);
                    });                                                                             
                    
                })                                                                                        
                
            })
            .catch((err) => {               
                res.status(500).json({ message: "Error updating order" });
            });
        }
        }
    }
}
export const cusManDeclineOrder = async (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.includes("customer")) {
            //destruct req and update orderModel in database
            const { note } = req.body;
            //update order by id
            orderModel
            .updateOne(
                { _id: req.body.id },
                {
                $set: {
                    custManDecline: true,
                    note: note,
                },
                }
            )
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error updating order" });
            });
        }
        }
    }
}


//admin with customer in privileges can get orders with custManApprove = false and custManDecline = false
export const getCustOrders = async (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.includes("customer")) {
            orderModel
            .find({
                custManApprove: false,
                custManDecline: false,
            })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error getting orders" });
            });

        }
        }
    }
}
//admin with site in privileges can get orders with custManApprove = true
export const getSiteOrders = async (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.includes("site")) {
            orderModel
            .find({
                custManApprove: true,
                status: "pending"
            })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error getting orders" });
            });

        }
        }
    }
}
//if user logged in and user type is customer and id is equal to custId in order then get order by id
export const getCustomersOrder = async (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "customer") {        
            orderModel
            .find({custId : req.logInfo.userObject._id})
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error getting order" });
            });        
        }else if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("customer")) {
                orderModel
                .find()
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500).json({ message: "Error getting order" });
                });        
            }
        }
    }
}
//admin with customer in privileges can get orders
export const startSite = async (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.includes("site")) {
            orderModel.updateOne(
                {
                    _id: req.body.id,            
                },{
                    $set: {
                        status: "in progress",
                    },
                }
            ).then((result) => {
                //check if  updated count is 1
                console.log(result)
                if (result.modifiedCount == 1) {
                    //get the order by id
                    orderModel.findById(req.body.id).then((result) => {
                        //check if order is not null
                        if (result != null) {
                            console.log("dsafjldasfjlsdajfljdas;lifhksadhf;lhdasflhdaslfhaskdhfklsad")
                            console.log(req.body.location)
                            createSiteFunction({
                                custId : result.custId,
                                siteId: req.body.siteId,
                                location: req.body.location,
                                start: Date.now(),
                                end : new Date(new Date().getTime() + (result.estDays * 24 * 60 * 60 * 1000)),
                                notes : req.body.notes                                                            
                            }).then((result) => {
                                res.send(result);
                                }
                                ).catch((err) => {
                                    console.log(err);
                                    res.status(500).json({ message: "Error creating site" });
                                }
                                )                           
                        }
                        else {
                            res.status(500).json({ message: "Error updating order find  by id errror" });
                        }
                    })
                }
                else {
                    res.status(500).json({ message: "Error updating order because nothing updated" });
                }
            }
            ).catch((err) => {
                res.status(500).json({ message: "Error updating order" });
            }   
            )
        }
        }
    }
}





