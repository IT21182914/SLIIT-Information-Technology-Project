import express from "express";
import inTransactionSchema from "../model/inTransaction.js";
import mongoose from "../db/conn.js";
const inTransactionModel = mongoose.model("inTransaction", inTransactionSchema);

//create inTrasaction if user have finance in privileges
export function createInTransaction(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("finance")) {
                //destruct req and create new inTransactionModel in database
                const { cost, date, price , description } = req.body;
                const newInTransaction = new inTransactionModel({
                    cost: cost,
                    date: date,
                    price : price,
                    description: description,
                });
                newInTransaction
                    .save()
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error creating inTransaction" });
                    });
            }
        }
    }
}
//delete inTransaction if user have finance in privileges by id
export function deleteInTransaction(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("finance")) {
                //delete inTransaction by id
                inTransactionModel
                    .deleteOne({ _id: req.params.id })
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error deleting inTransaction" });
                    });
            }
        }
    }
}
//update existing inTransaction if user have finance in privileges by id
export function updateInTransaction(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("finance")) {
                //destruct req and update inTransactionModel in database
                const { cost, date, description , price} = req.body;
                //update inTransaction by id
                inTransactionModel
                    .updateOne(
                        { _id: req.params.id },
                        {
                            $set: {
                                price : price,
                                cost: cost,
                                date: date,
                                description: description,
                            },
                        }
                    )
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error updating inTransaction" });
                    });
            }
        }
    }
}
//get all inTransactions if user have finance in privileges
export function getAllInTransactions(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userObject.privileges.includes("finance")) {
            //get all inTransactions
            inTransactionModel
                .find()
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500).json({ message: "Error getting inTransactions" });
                });
        }
    }
}

export function getAllInTransactionsRep() {
   return inTransactionModel.find();
}
//get inTransaction by id if admin  user have finance in privileges
export function getInTransactionById(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("finance")) {
                //get inTransaction by id
                inTransactionModel
                    .find({ _id: req.params.id })   
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting inTransaction" });
                    });
            }
        }
    }
}
//function to create inTransaction
export function createInTransactionFunction(cost, description , price) {
    //create new inTransactionModel in database
    const newInTransaction = new inTransactionModel({
        cost: cost,
        price : price,
        description: description,
    });
    return newInTransaction
        .save()
}









//get inTransaction by date if admin user have finance in privileges
export function getInTransactionByDate(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("finance")) {
                //get inTransaction by date
                inTransactionModel

                    .find({ date: req.params.date })    
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting inTransaction" });
                    });
            }
        }
    }
}
//get total of cost of all inTransactions if  admin user have finance in privileges
export function getTotalInTransactionCost(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("finance")) {
                //get total of cost of all inTransactions
                inTransactionModel

                    .aggregate([
                        {
                            $group: {
                                _id: null,
                                total: { $sum: "$cost" },
                            },
                        },
                    ])
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting inTransaction" });
                    });
            }
        }
    }
}
//get total of price of all inTransactions if admin user have finance in privileges
export function getTotalInTransactionPrice(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("finance")) {
                //get total of price of all inTransactions
                inTransactionModel
                    .aggregate([
                        {
                            $group: {
                                _id: null,
                                total: { $sum: "$price" },
                            },
                        },
                    ])
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting inTransaction" });
                    });
            }
        }
    }
}



