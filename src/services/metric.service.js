import { Metric } from "../models/metric.model.js";
import { aggregateMetrics } from "../utils/aggregation.utils.js";

const createMetricEntry = async ({ serviceName, CPU, Memory, RequestsPerMin, timestamp }) => {
  return await Metric.create({ serviceName, CPU, Memory, RequestsPerMin, timestamp });
};

const getAggregatedMetrics = async () => {
  const metrics = await Metric.find();
  return aggregateMetrics(metrics);
};

export { createMetricEntry, getAggregatedMetrics };