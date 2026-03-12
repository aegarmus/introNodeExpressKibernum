import { Router } from "express";
import { DataController } from "../controllers/data.controller.js";

const router = Router()

router.get('/data', DataController.getAllData)

export default router;