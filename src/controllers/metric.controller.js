import { Metric } from "../models/metric.model.js";
import { sendResponse } from "../utils/apiResponse.js";
import { aggregateMetrics } from "../utils/aggregation.utils.js";

const createMetric = async (req, res) => {
  try {
    const metric = await Metric.create(req.body);
    return sendResponse(res, { statusCode: 201, message: "Metric recorded", data: metric });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

const getAggregatedMetrics = async (req, res) => {
  try {
    const metrics = await Metric.find();
    const aggregated = aggregateMetrics(metrics);
    return sendResponse(res, { message: "Aggregated metrics", data: aggregated });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

export { createMetric, getAggregatedMetrics };