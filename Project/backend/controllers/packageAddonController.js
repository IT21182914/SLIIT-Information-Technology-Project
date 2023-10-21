import mongoose from "../db/conn.js";
import packageAddonSchema from "../model/packageAddon.js";

export const packageAddonModel = mongoose.model("packageAddons", packageAddonSchema);

//insert new packageAddon into database if user have  package in privileges
export function createPackageAddon(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.include("package")) {
            //destruct req and create new packageAddonModel in database
            const { name, price, description, image, packageId, cost } = req.body;
            const newPackageAddon = new packageAddonModel({
            name: name,
            price: price,
            description: description,
            image: image,
            packageId: packageId,
            cost: cost,
            });
            newPackageAddon
            .save()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error creating packageAddon" });
            });
        }
        }
    }
}

//update existing packageAddon if user have  package in privileges by id
export function updatePackageAddon(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.include("package")) {
            //destruct req and update packageAddonModel in database
            const { name, price, description, image, packageId, cost } = req.body;
            //update packageAddon by id
            packageAddonModel
            .updateOne(
                { _id: req.params.id },
                {
                $set: {
                    name: name,
                    price: price,
                    description: description,
                    image: image,
                    packageId: packageId,
                    cost: cost,
                },
                }
            )
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error updating packageAddon" });
            });
        }
        }
    }
}
//delete existing packageAddon if user have  package in privileges by id
export function deletePackageAddon(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.include("package")) {
            //delete packageAddon by id
            packageAddonModel
            .deleteOne({ _id: req.params.id })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error deleting packageAddon" });
            });
        }
        }
    }
}
//get all packageAddons if user have  package in privileges
export function getAllPackageAddons(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.include("package")) {
            //get all packageAddons
            packageAddonModel
            .find()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error getting packageAddons" });
            });
        }
        }
    }
}
//get packageAddon by id if user have  package in privileges
export function getPackageAddonById(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
        if (req.logInfo.userObject.privileges.include("package")) {
            //get packageAddon by id
            packageAddonModel
            .findById(req.params.id)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error getting packageAddon" });
            });
        }
        }
    }
}
//get packageAddon by packageId
export function getPackageAddonByPackageId(req, res) {
    //get packageAddon by packageId
    packageAddonModel
    .find({ packageId: req.params.id })
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(500).json({ message: "Error getting packageAddon" });
    });
}
