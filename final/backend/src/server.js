import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import BenchmarkRoutes from "./routes/benchmark.routes.js";

const PORT = process.env.PORT || 8080;
const IP = process.env.IP || "0.0.0.0";

const app = express();
app.use(cors(), bodyParser.json());

app.get("/", (req, res) => {
  res.json({ version: "1.0.0" });
});

BenchmarkRoutes(app);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

app.listen(PORT, IP, () => {
  console.log(`Server is running on ${IP}:${PORT}.`);
});