import mongoose from "../db/conn.js";
const packageAddonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    image : {
        type : String,
        required : true
    },
    packageId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    cost : {
        type : Number,
        required : true,
        default : 0
    }

});
export default packageAddonSchema;