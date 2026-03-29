# 🖥️ Monitoring & Logging Management System (MLMS)

---

## 🌐 Project Overview

**MLMS** is a production-grade, **platform-agnostic backend service** for monitoring and logging.  

It allows backend systems to:

- Send logs (`INFO`, `WARN`, `ERROR`)  
- Send performance metrics (CPU, Memory, Requests per Minute)  
- Aggregate and visualize data in real-time via a **WebSocket dashboard**  
- Monitor services, detect anomalies, and maintain system health  

This project demonstrates **real-world backend architecture, aggregation, and dashboard integration**, making it **portfolio-ready** for recruiters.

---

## 🎯 Core Objectives

- Centralized **logging** and **metrics collection**  
- **Real-time dashboard** via WebSocket  
- **Aggregated metrics** for performance analysis  
- **Docker + Kubernetes deployment** for platform-agnostic operation  
- **Swagger documentation** for API clarity  

---

## 🧰 Technology Stack

- **Node.js** — Backend runtime  
- **Express.js** — REST API framework  
- **MongoDB + Mongoose** — NoSQL storage  
- **WebSocket** — Real-time dashboard updates  
- **Docker** — Containerized deployment  
- **Kubernetes** — Orchestration & scaling  
- **Swagger** — API documentation  
- **GitHub Actions** — CI/CD  

---

## 📂 Folder Structure

```text
mlms/
│
├── src/
│   ├── config/           # Environment & DB configurations
│   ├── controllers/      # Request handlers
│   ├── models/           # Log & Metric data models
│   ├── routes/           # API routes
│   ├── services/         # Business logic & aggregation
│   └── utils/            # Helper functions
│
├── docs/                 # Swagger configuration
├── k8s/                  # Kubernetes deployment files
├── .github/              # CI/CD pipelines
│
├── Dockerfile
├── .dockerignore
├── package.json
├── .env
├── info.md               # This documentation
└── server.js
