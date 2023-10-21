import express from "express";
import {
  approvePackage,
  createPackage,
  deletePackage,
  getAllApprovedPackages,
  getAllPackages,
  getPackageById,
  getUnapprovedPackages,
  updatePackage,
} from "../controllers/packageController.js";

const packagesRouter = express.Router();

packagesRouter.post("/addpackage", createPackage);

// packagesRouter.get("/allApprovedPackages",getAllApprovedPackages);

packagesRouter.get("/getAllPackages", getAllPackages);

packagesRouter.get("/getAllAprovedPackages", getAllApprovedPackages);

packagesRouter.get("/getPackageById/:id", getPackageById);

packagesRouter.put("/approvePackage", approvePackage);
packagesRouter.get("/getUnapprovedPackages", getUnapprovedPackages);
packagesRouter.put("/updatePackage", updatePackage);
packagesRouter.delete("/deletePackage", deletePackage);

export default packagesRouter;
