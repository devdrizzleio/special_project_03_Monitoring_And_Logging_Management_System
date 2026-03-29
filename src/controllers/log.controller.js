import { Log } from "../models/log.model.js";
import { sendResponse } from "../utils/apiResponse.js";

const createLog = async (req, res) => {
  try {
    const log = await Log.create(req.body);
    return sendResponse(res, { statusCode: 201, message: "Log recorded successfully", data: log });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

const getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 });
    return sendResponse(res, { message: "Logs retrieved", data: logs });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

export { createLog, getAllLogs };