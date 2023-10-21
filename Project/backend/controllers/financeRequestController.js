import express from "express";
import mongoose from "../db/conn.js";

import { createAutomateTransaction } from "./outTransactionController.js";
import financeRequestSchema from "../model/financeRequest.js";
import { createAutomateTransactionExpence } from "./FinanceBarController.js";

const financeRequestModel = mongoose.model(
  "financeRequest",
  financeRequestSchema
);

//create finance request if user is admin
export function createFinanceRequest(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {    
      //destruct req and create new financeRequestModel in database

      const { cost, description, section } = req.body;
      const newFinanceRequest = new financeRequestModel({
        section: section,
        cost: cost,
        description: description,
        name:
          req.logInfo.userObject.gender == "male"
            ? "Mr. " +
              req.logInfo.userObject.firstName +
              " " +
              req.logInfo.userObject.lastName
            : "Ms. " +
              req.logInfo.userObject.firstName +
              " " +
              req.logInfo.userObject.lastName,
        image: req.logInfo.userObject.image,
        userId: req.logInfo.userObject._id,
      });
      newFinanceRequest
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.status(500).json({ message: "Error creating finance request" });
        });
    }
  }
}
//approve finance details if admin user who have finance in privileges
export function approveFinanceRequest(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        console.log("This is ID : " + req.params.id);
        //update finance request by id
        financeRequestModel
          .updateOne(
            { _id: req.params.id },
            {
              $set: {
                approved: true,
              },
            }
          )
          .then((result) => {
            //find finance request by id
            financeRequestModel
              .findOne({ _id: req.params.id })
              .then((result) => {
               
                //generate transaction id using date
                const date = new Date();
                const transactionId =
                  "TO-" +
                  date.getFullYear().toString().substring(2,4) +
                  date.getMonth() +
                  date.getDate() +
                  date.getHours() +
                  date.getMinutes() +
                  date.getSeconds() +
                  date.getMilliseconds();

                console.log(transactionId);
                console.log(result.cost);
                console.log(result.name);
                console.log(result.description);

                createAutomateTransaction({
                  transactionId: transactionId,
                  cost: result.cost,
                  name: result.name,
                  description: result.description,
                  image: result.image,
                  date: result.date,
                  section: result.section,
                })
                  .then((result) => {
                    res.send(result);
                    createAutomateTransactionExpence({
                      cost: result.cost,
                      date: result.date,
                    });

                  })
                  .catch((err) => {
                    console.log(err);
                    res
                      .status(500)
                      .json({ message: "Error approving finance request" });
                  });
              })
              .catch((err) => {
                console.log(err);
                res
                  .status(500)
                  .json({ message: "Error approving finance request" });
              });
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Error approving finance request" });
          });
      }
    }
  }
}
//make decline attribute true in finance request if admin user who have finance in privileges
export function declineFinanceRequest(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        //update finance request by id
        financeRequestModel
          .updateOne(
            { _id: req.params.id },
            {
              $set: {
                declined: true,
                note: req.body.note,
              },
            }
          )
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Error declining finance request" });
          });
      }
    }
  }
}

//get admins can get finance requests by section
export function getFinanceRequestsBySection(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (true) {
        //find finance requests by section
        financeRequestModel
          .find({ section: req.params.section })
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting finance requests" });
          });
      }
    }
  }
}
//get all finance requests if admin user who have finance in privileges
export function getAllFinanceRequests(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        //find all finance requests
        console.log("hello get all");
        financeRequestModel
          .find(                                    
            {
              approved: false,
              declined: false
             }
          )
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting finance requests" });
          });
      }
    }
  }
}

//get all finance requests if admin user who have finance in privileges
export function getAllFinanceRequestsByUser(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {           
        //find all finance requests
          financeRequestModel
          .find({userId : req.logInfo.userObject.id})
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting finance requests" });
          });     
    }
  }
}

export function getAllFinanceRequestsToBeApproved(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        //find all finance requests
        console.log("hello get all");
        financeRequestModel
          .find()
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting finance requests" });
          });
      }
    }
  }
}
