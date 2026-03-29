import express from "express";
import { createLog, getAllLogs } from "../controllers/log.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/logs:
 *   post:
 *     summary: Receive logs from any backend
 *     tags: [Logs]
 */
router.post("/", createLog);

/**
 * @swagger
 * /api/logs:
 *   get:
 *     summary: Retrieve recent logs
 *     tags: [Logs]
 */
router.get("/", getAllLogs);

export default router;