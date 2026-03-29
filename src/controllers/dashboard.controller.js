import { Log } from "../models/log.model.js";
import { Metric } from "../models/metric.model.js";
import { aggregateMetrics } from "../utils/aggregation.utils.js";
import { sendResponse } from "../utils/apiResponse.js";

const getDashboard = async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }).limit(50);
    const metrics = await Metric.find();
    const aggregatedMetrics = aggregateMetrics(metrics);

    return sendResponse(res, { message: "Dashboard data", data: { logs, aggregatedMetrics } });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

export { getDashboard };