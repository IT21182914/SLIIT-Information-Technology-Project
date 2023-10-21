import express from "express";
import packageSchema from "../model/package.js";
import mongoose from "../db/conn.js";

const packageModel = mongoose.model("packages", packageSchema);

//insert new package into database
export function createPackage(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("package")) {
        //destruct req and create new packageModel in database
        const {
          name,
          price,
          description,
          duration,
          homeImage,
          modelLink,
          cost,
          planImage,
          isApproved,
        } = req.body;
        const newPackage = new packageModel({
          name: name,
          price: price,
          description: description,
          homeImage: homeImage,
          modelLink: modelLink,
          duration: duration,
          cost: cost,
          planImage: planImage,
        });
        newPackage
          .save()
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error creating package" });
          });
      }
    }
  }
}
//update existing package if user have  package in privileges by id
export function updatePackage(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("package")) {
        //destruct req and update packageModel in database
        const {
          name,
          price,
          description,
          duration,
          homeImage,
          modelLink,
          cost,
          planImage,
          isApproved,
        } = req.body;
        //update package by id
        // packageModel.updateOne({_id : req.params.id} , {$set : {
        packageModel
          .updateOne(
            { _id: req.body.id },
            {
              $set: {
                name: name,
                price: price,
                description: description,
                duration: duration,
                cost: cost
              },
            }
          )
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error updating package" });
          });
      }
    }
  }
}
//delete existing package if user have  package in privileges by id
export function deletePackage(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("package")) {
        //delete package by id
        packageModel
          .deleteOne({ _id: req.query.id })
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error deleting package" });
          });
      }
    }
  }
}
//get all approved packages
export function getAllApprovedPackages(req, res) {
  packageModel
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting approved packages" });
    });
}
//get all packages if user have package in privileges
export function getAllPackages(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("package")) {
        packageModel
          .find()
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting packages" });
          });
      }
    }
  }
}
//get package by id if user have package in privileges
export function getPackageById(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("package")) {
        packageModel
          .findOne({ _id: req.params.id })
          // packageModel.find({_id : req.query.id})
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting package" });
          });
      }
    }
  }
}
//get only approved packages  by id
export function getApprovedPackageById(req, res) {
  packageModel
    .find({ _id: req.params.id, isApproved: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting approved package" });
    });
}
//get packages by id if user have package in privileges
export function getPackagesByUserId(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.include("package")) {
        packageModel
          .find({ userId: req.params.id })
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error getting packages" });
          });
      }
    }
  }
}
// make package approved if user have finance in privileges
export function approvePackage(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        packageModel
          .updateOne(
            { _id: req.query.id },
            {
              $set: {
                isApproved: true,
              },
            }
          )
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.status(500).json({ message: "Error approving package" });
          });
      }
    }
  }
}
//get unapproved packages if user have finance in privileges
export function getUnapprovedPackages(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType == "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        packageModel
          .find({ isApproved: false })
          .then((result) => {
            console.log(result);
            res.send(result);
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Error getting unapproved packages" });
          });
      }
    }
  }
}
