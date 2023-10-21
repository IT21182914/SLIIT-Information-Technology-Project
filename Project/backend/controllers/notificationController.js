import notificationSchema from "../model/notification.js";
import mongoose from "../db/conn.js";
const Notification = mongoose.model("Notification", notificationSchema);

//create a notification if usr logged , user is a admin
export function createNotification(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            //destruct req and create new Notification in database
            const { title, description,section} = req.body;
            const newNotification = new Notification({
                title : title,
                description : description,
                adminId : req.logInfo.userObject._id,
                adminFirstName : req.logInfo.userObject.firstName,
                adminLastName : req.logInfo.userObject.lastName,
                adminImg : req.logInfo.userObject.img,
                section : section
            });
            newNotification
                .save()
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500).json({ message: "Error creating notification" });
                });
        }
    }
}
//get all notifications by section if user is logged , user is a admin and the privileges of the user contains the section
export function getNotificationsBySection(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes(req.params.section)) {
                Notification.find({section : req.params.section})
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error getting notifications" });
                    });
            }
        }
    }
}
//delete a notification by id if user is logged , user is admin
export function deleteNotification(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            Notification.deleteOne({ _id: req.params.id , adminId : req.logInfo.userObject._id })
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500).json({ message: "Error deleting notification" });
                });
        }
    }
}

