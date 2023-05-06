import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import BenchmarkRoutes from "./routes/benchmark.routes.js";

const PORT = process.env.BACKEND_PORT || 8080;
const IP = process.env.BACKEND_IP || "0.0.0.0";

const app = express();
app.use(cors(), bodyParser.json());

app.get("/", (req, res) => {
  res.json({ name: "Spede" });
});

BenchmarkRoutes(app);

app.listen(PORT, IP, () => {
  console.log(`Server is running on ${IP}:${PORT}.`);
});