import express from 'express';
import mongoose from '../db/conn.js';
import feedbackSchema from '../model/feedback.js';

//customer can create feedback
export const createFeedback = async (req, res) => {
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == 'customer'){
            //destruct req and create new feedbackModel in database
            const { comment, rate,packageId} = req.body;
            const newFeedback = new feedbackModel({
                comment: comment,
                rate: rate,                
                custId: req.logInfo.userObject._id,
                packageId: packageId
            });
            newFeedback
                .save()
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Error creating feedback' });
                });
        }
    }
};

//admin with customer in priveleges can delete feedback by id
export const deleteFeedback = async (req, res) => {
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == 'admin'){
            if(req.logInfo.userObject.privileges.includes('customer')){
                //delete feedback by id
                feedbackModel
                    .deleteOne({ _id: req.params.id })
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.status(500).json({ message: 'Error deleting feedback' });
                    });
            }
        }
    }
}

//customer can update feedbacks witch have his id as custId
export const updateFeedback = async (req, res) => {
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == 'customer'){
            //destruct req and update feedbackModel in database
            const { comment, rate} = req.body;
            //update feedback by id
            feedbackModel
                .updateOne(
                    { _id: req.params.id , custId: req.logInfo.userObject._id},
                    {
                        $set: {
                            comment: comment,
                            rate: rate,
                        },
                    }
                )
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Error updating feedback' });
                });
        }
    }
}
//customer can delete feedbacks witch have his id as custId
export const customerDeleteFeedback = async (req, res) => {
    if(req.logInfo.userLogged){
        if(req.logInfo.userType == 'customer'){
            //delete feedback by id
            feedbackModel
                .deleteOne({ _id: req.params.id , custId: req.logInfo.userObject._id})
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Error deleting feedback' });
                });
        }
    }
}

//anyone can get all feedbacks by packageId
export const getAllFeedbacks = async (req, res) => {
    //get all feedbacks
    feedbackModel
        .find({packageId: req.params.id})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error getting feedbacks' });
        });
}






