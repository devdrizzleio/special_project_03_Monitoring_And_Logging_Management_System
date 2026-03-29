import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import WebSocket from "ws";

import { loadEnvVariables } from "./src/config/env.config.js";
import { connectDatabase } from "./src/config/db.config.js";

import logRoutes from "./src/routes/log.routes.js";
import metricRoutes from "./src/routes/metric.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";

import { swaggerDocs } from "./docs/swagger.js";

loadEnvVariables();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME} API is healthy & lively`
  });
});

// Routes
app.use("/api/logs", logRoutes);
app.use("/api/metrics", metricRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Swagger Docs
swaggerDocs(app);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

// HTTP + WebSocket Server
const PORT = process.env.PORT || 6000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, port: process.env.WEBSOCKET_PORT });

wss.on("connection", (ws) => {
  console.log("WebSocket client connected");
  ws.send(JSON.stringify({ message: "Welcome to MLMS WebSocket Dashboard" }));
});

const startServer = async () => {
  try {
    await connectDatabase();
    server.listen(PORT, () => {
      console.log(`MLMS Server running on port ${PORT}`);
      console.log(`Swagger available at /api-docs`);
      console.log(`WebSocket running on port ${process.env.WEBSOCKET_PORT}`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
};

startServer();