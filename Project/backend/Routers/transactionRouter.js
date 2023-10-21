import express from "express";
import mongoose from "../db/conn.js";
import {
  getAllOutTransactionsRep,
  updateOutTransaction,
  deleteOutTransaction,
  getAllOutTransactions,
} from "../controllers/outTransactionController.js";
import {
  getAllInTransactionsRep,
  updateInTransaction,
  deleteInTransaction,
  createInTransaction,
} from "../controllers/inTransactionController.js";
import { get } from "mongoose";

function transactions(req, res) {
  if (req.logInfo.userLogged) {
    if (req.logInfo.userType === "admin") {
      if (req.logInfo.userObject.privileges.includes("finance")) {
        getAllOutTransactionsRep().then((response) => {
          getAllInTransactionsRep().then((result) => {
            const data = {
              inTransactions: result,
              outTransactions: response,
            };
            console.log(data);
            res.send(data);
          });
        });
      }
    }
  }
}

const transactionRouter = express.Router();

transactionRouter.get("/view", getAllOutTransactions);
transactionRouter.get("/w", transactions);
transactionRouter.delete("/post");
transactionRouter.put("/post");

transactionRouter.put("/post");

transactionRouter.put(`/update/:id`, updateOutTransaction);
transactionRouter.delete(`/delete/:id`, deleteOutTransaction);

export default transactionRouter;
