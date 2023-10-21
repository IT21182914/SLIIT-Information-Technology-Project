import equipmentSchema from "../model/equipment.js";
import mongoose from "../db/conn.js";

const EquipmentModel = mongoose.model("equipment", equipmentSchema);

// use with admin user type and equipment in privileges can create new equipment
export function createEquipment(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("equipment")) {
                //destruct req and create new equipmentModel in database
                const { equipmentId, imageLink, name, value, description, qty } = req.body;
                const newEquipment = new EquipmentModel({
                    equipmentId: equipmentId,
                    imageLink: imageLink,
                    name: name,
                    value: value,
                    description: description,
                    qty: qty,
                });
                newEquipment
                    .save()
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.send(err)
                        // res.status(500).json({ message: "Error creating equipment" });
                    });
            }
        }
    }
}
// use with admin user type and equipment in privileges can update new equipment
export function updateEquipment(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("equipment")) {
                //destruct req and update equipmentModel in database
                const { equipmentId, imageLink, name, value, description, qty } = req.body;
                //update equipment by id
                EquipmentModel
                    .updateOne(
                        { _id: req.params.id },
                        {
                            $set: {
                                equipmentId: equipmentId,
                                imageLink: imageLink,
                                name: name,
                                value: value,
                                description: description,
                                qty: qty,
                            },
                        }
                    )
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error updating equipment" });
                    });
            }
        }
    }
}
// use with admin user type and equipment in privileges can delete new equipment
export function deleteEquipment(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("equipment")) {
                //destruct req and delete equipmentModel in database
                const { equipmentId, imageLink, name, value, description, qty } = req.body;
                //delete equipment by id
                EquipmentModel
                    .deleteOne(
                        { _id: req.params.id },
                        {
                            $set: {
                                equipmentId: equipmentId,
                                imageLink: imageLink,
                                name: name,
                                value: value,
                                description: description,
                                qty: qty,
                            },
                        }
                    )
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error deleting equipment" });
                    });
            }
        }
    }
}
// use with admin user type and equipment in privileges can get all equipment
export function getAllEquipment(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("equipment")) {
                //get all equipment
                EquipmentModel
                    .find()
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting equipment" });
                    });
            }
        }
    }
}
// use with admin user type and equipment in privileges can get equipment by id
export function getEquipmentById(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("equipment")) {
                //get all equipment
                EquipmentModel
                    .find({_id: req.body.id})
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting equipment" });
                    });
            }
        }
    }
}
//user with admin user type and equipment in privileges can get total value of all equipment
export function getTotalValue(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("equipment")) {
                //get all equipment
                EquipmentModel
                    .find()
                    .then((result) => {
                        let totalValue = 0;
                        result.forEach((equipment) => {
                            totalValue += equipment.value * equipment.qty;
                        });
                        res.send({ totalValue: totalValue });
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting equipment" });
                    });
            }
        }
    }
}
//user with admin user type and equipment in privileges can get total value of equipment by id
export function getTotalValueById(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("equipment")) {
                //get all equipment
                EquipmentModel
                    .find({_id: req.body.id})
                    .then((result) => {
                        let totalValue = 0;
                        result.forEach((item) => {
                            totalValue += item.value * item.qty;
                        });
                        res.send({ totalValue: totalValue });
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting equipment" });
                    });
            }
        }
    }
}
    
