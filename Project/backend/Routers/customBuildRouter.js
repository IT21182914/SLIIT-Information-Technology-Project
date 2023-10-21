import customBuild from "../model/customBuild.js";
import {createCustomBuild,
deleteCustomBuild,
getAllCustomBuild,
editCustomBuild,
getCustomBuildById,
getAllCustomBuildsAdmin} from "../controllers/customBuildController.js";

import express from "express";
import customerRouter from "./customerRouter.js";
const customBuildRouter = express.Router();

customBuildRouter.post("/",createCustomBuild);
customBuildRouter.get("/",getAllCustomBuild);
customBuildRouter.get("/:id",getCustomBuildById);
customerRouter.get("/admin",getAllCustomBuildsAdmin)
customBuildRouter.get("/admin/:id",getCustomBuildById)
customBuildRouter.put("/",editCustomBuild);
customBuildRouter.delete("/:id",deleteCustomBuild);

export default customBuildRouter;

   