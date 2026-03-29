import mongoose from "mongoose";

const metricSchema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    CPU: { type: Number, required: true },
    Memory: { type: Number, required: true },
    RequestsPerMin: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Metric = mongoose.model("Metric", metricSchema);

export { Metric };