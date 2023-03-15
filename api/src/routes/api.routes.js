import express from "express"
import { getLinksHandler } from "../controllers/api.controllers.js"

const router = express.Router()

router.route("/link").get(getLinksHandler)

export default router