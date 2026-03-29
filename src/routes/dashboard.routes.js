import express from "express";
import { getDashboard } from "../controllers/dashboard.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: View aggregated logs & metrics
 *     tags: [Dashboard]
 */
router.get("/", getDashboard);

export default router;