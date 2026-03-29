import express from "express";
import { createMetric, getAggregatedMetrics } from "../controllers/metric.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/metrics:
 *   post:
 *     summary: Receive performance metrics
 *     tags: [Metrics]
 */
router.post("/", createMetric);

/**
 * @swagger
 * /api/metrics:
 *   get:
 *     summary: Retrieve aggregated metrics
 *     tags: [Metrics]
 */
router.get("/", getAggregatedMetrics);

export default router;