import mongoose from "../db/conn.js";
const vehicleSchema = new mongoose.Schema({
    // vehicleId: {
    //     type: String,
    //     required: true,
    // },
    // imageLink: {
    //     type: String,
    //     required: true,
    // },
    // type
    // : {
    //     type: String,
    //     required: true,
    // },
    vName: {
        type: String,
        required: true,
    },
    RegNumber: {
        type: String,
        required: true,
    },
    vModel: {
        type: String,
        required: true,
    },
    chassisNumber: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    purchaseDate: {
        type: Date,
        required: true,
    },
    // description: {
    //     type: String,
    //     required: true,
    // },
    // registrationDate: {
    //     type: Date,
    //     required: true,
    // }
});
export default vehicleSchema