import mongoose from "../db/conn.js";
const equipmentSchema = new mongoose.Schema({
    equipmentId: {
        type: String,
        required: true,
    },
    imageLink: {
        type: String,
        
    },

    name: {
        type: String,
        required: true,
    },

    value: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    
});
export default equipmentSchema;