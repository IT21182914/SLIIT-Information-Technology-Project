import express from 'express'

import { deleteSite, getAllSites, updateSite } from '../controllers/siteController.js'

const siteRouter =  express.Router()
siteRouter.get("/",getAllSites)
siteRouter.delete("/:id",deleteSite)
siteRouter.put("/:id",updateSite)

export default siteRouter