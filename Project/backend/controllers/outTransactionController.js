import express from "express";
import mongoose from "../db/conn.js";
import outTransActionSchema from "../model/outTransAction.js";

const outTransacttionModel = mongoose.model(
  "outTransaction",
  outTransActionSchema
);

//create outTransaction if user have finance in privileges
export function createOutTransaction(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        // destruct req and create new outTransactionModel in database
        const { cost, uImage, description, uName, transactionId } = req.body;
        console.log(cost);
        console.log(description);
        const newOutTransaction = new outTransacttionModel({
          cost: cost,
          description: description,
          date: Date.now(),
          image: uImage,
          name: uName,
          transactionId: transactionId,
        });
        newOutTransaction
          .save()
          .then((result) => {
            res.send(result);
            console.log(result);
          })
          .catch((err) => {
            console.log("fails");
            console.log(err);
            res.status(500).json({ message: "Error creating outTransaction" });
          });
      }
    }
  }
}
//delete outTransaction if user have finance in privileges by id
export function deleteOutTransaction(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        //delete outTransaction by id
        console.log(req.params.id);
        outTransacttionModel
          .deleteOne({ _id: req.params.id })
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error deleting outTransaction" });
          });
      }
    }
  }
}

//update existing outTransaction if user have finance in privileges by id

export function updateOutTransaction(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        // destruct req and update outTransactionModel in database

        const { cost, date, description } = req.body;

        console.log(req.body.transacton);
        console.log(req.params.id);
        //update outTransaction by id
        outTransacttionModel
          .updateOne(
            { _id: req.params.id },
            {
              $set: {
                cost: req.body.price,
                description: req.body.description,
              },
            }
          )
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error updating outTransaction" });
          });
      }
    }
  }
}

//get all outTransactions if user have finance in privileges
export function getAllOutTransactions(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        // get all outTransactions
        outTransacttionModel
          .find()
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting outTransactions" });
          });
      }
    }
  }
}

export function getAllOutTransactionsRep() {
  return outTransacttionModel.find();
}

//get outTransaction by id if user have finance in privileges
export function getOutTransactionById(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        //get outTransaction by id
        outTransacttionModel
          .findById(req.params.id)
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting outTransaction" });
          });
      }
    }
  }
}
//get outTransaction by date if user have finance in privileges
export function getOutTransactionByDate(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        //get outTransaction by date
        outTransacttionModel
          .find({ date: req.params.date })
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting outTransaction" });
          });
      }
    }
  }
}
//get total of all outTransactions if user have finance in privileges

export function getTotalOutTransactions(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        //get total of all outTransactions
        outTransacttionModel
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
            res
              .status(500)
              .json({ message: "Error getting total outTransactions" });
          });
      }
    }
  }
}
//function that takes cost and description as parameters and create new outTransaction
export function createAutomateTransaction(data) {
  const { cost, image, description, name, transactionId, section } = data;
  console.log(cost);
  console.log(description);
  const newOutTransaction = new outTransacttionModel({
    cost: cost,
    description: description,
    image: image,
    name: name,
    transactionId: transactionId,
    section: section,
  });
  return newOutTransaction.save();
}
