import mongoose from "../db/conn.js";
import vehicleSchema from "../model/vehicle.js";
const vehicleModel = mongoose.model("vehicle", vehicleSchema);

//user with admin user type and transport in privileges can create vehicles
export function createVehicle(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("transport")) {
                //destruct req and create new vehicleModel in database
                const { vName, RegNumber, vModel, chassisNumber, value, purchaseDate } = req.body;
                const newVehicle = new vehicleModel({
                    // vehicleId: vehicleId,
                    // imageLink: imageLink,
                    // type: type,
                    // value: value,
                    // description: description,
                    // registrationDate: registrationDate,
                    vName: vName,
                    RegNumber: RegNumber,
                    vModel: vModel,
                    chassisNumber: chassisNumber,
                    value: value,
                    purchaseDate: purchaseDate,
                });
                
                newVehicle
                    .save()
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error creating vehicle" });
                    });
            }
        }
    }
}
//user with admin user type and transport in privileges can update vehicles
export function updateVehicle(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("transport")) {
                //destruct req and update vehicleModel in database
                const { vName, RegNumber, vModel, chassisNumber, value, purchaseDate } = req.body;
                //update vehicle by id
                vehicleModel
                    .updateOne(
                        { _id: req.params.id },
                        {
                            $set: {
                                vName: vName,
                                RegNumber: RegNumber,
                                vModel: vModel,
                                chassisNumber: chassisNumber,
                                value: value,
                                purchaseDate: purchaseDate,
                            },
                        }
                    )
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error updating vehicle" });
                    });
            }
        }
    }
}
//user with admin user type and transport in privileges can delete vehicles
export function deleteVehicleById(req, res){
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("transport")) {
                //destruct req and update vehicleModel in database
               
                //update vehicle by id
                const { vName, RegNumber, vModel, chassisNumber, value, purchaseDate } = req.body;
                //delete equipment by id
                vehicleModel
                    .deleteOne(
                        { _id: req.params.id },
                        {
                            $set: {
                                vName: vName,
                                RegNumber: RegNumber,
                                vModel: vModel,
                                chassisNumber: chassisNumber,
                                value: value,
                                purchaseDate: purchaseDate,
                            },
                        }
                    )
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error updating vehicle" });
                    });
            }
        }
    }
}
//user with admin user type and transport in privileges can get value of all vehicles
export function getAllVehicles(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("transport")) {
                vehicleModel
                    .find()
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting vehicles" });
                    });
            }
        }
    }
}