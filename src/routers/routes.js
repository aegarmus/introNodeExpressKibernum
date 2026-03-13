import { Router } from "express";
import { DataController } from "../controllers/data.controller.js";

const router = Router()

router.get('/data', DataController.getAllData)
router.post('/data', DataController.create)
router.put('/data/:id', DataController.update)

export default router;