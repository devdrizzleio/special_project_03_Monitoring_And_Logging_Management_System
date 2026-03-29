const aggregateMetrics = (metrics) => {
  if (!metrics || metrics.length === 0) return {};

  const totalCPU = metrics.reduce((sum, m) => sum + m.CPU, 0);
  const totalMemory = metrics.reduce((sum, m) => sum + m.Memory, 0);
  const totalRequests = metrics.reduce((sum, m) => sum + m.RequestsPerMin, 0);

  const count = metrics.length;

  return {
    avgCPU: totalCPU / count,
    avgMemory: totalMemory / count,
    avgRequestsPerMin: totalRequests / count
  };
};

export { aggregateMetrics };