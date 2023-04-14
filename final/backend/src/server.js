import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import BenchmarkRoutes from "./routes/benchmark.routes.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.json({ version: "1.0.0" });
});

BenchmarkRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
