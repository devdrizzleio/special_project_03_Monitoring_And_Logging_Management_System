import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true, trim: true },
    level: { type: String, enum: ["INFO", "WARN", "ERROR"], default: "INFO" },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);

export { Log };