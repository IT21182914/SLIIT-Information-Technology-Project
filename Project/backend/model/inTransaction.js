import mongoose from "../db/conn.js";

const date = new Date();

var transactionId =
  "TI-" +
  date.getFullYear().toString().substring(2,4) +
  date.getMonth() +
  date.getDate() +
  date.getHours() +
  date.getMinutes() +
  date.getSeconds() +
  date.getMilliseconds();

const inTransactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
    default: transactionId,
  },
  cost: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export default inTransactionSchema;
