import { fetchRecentLogs } from "./log.service.js";
import { getAggregatedMetrics } from "./metric.service.js";

const getDashboardData = async () => {
  const logs = await fetchRecentLogs(50);
  const aggregatedMetrics = await getAggregatedMetrics();
  return { logs, aggregatedMetrics };
};

export { getDashboardData };