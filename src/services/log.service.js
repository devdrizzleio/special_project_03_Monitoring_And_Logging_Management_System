import { Log } from "../models/log.model.js";

const createLogEntry = async ({ serviceName, level, message, timestamp }) => {
  return await Log.create({ serviceName, level, message, timestamp });
};

const fetchRecentLogs = async (limit = 50) => {
  return await Log.find().sort({ timestamp: -1 }).limit(limit);
};

export { createLogEntry, fetchRecentLogs };