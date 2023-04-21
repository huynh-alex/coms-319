import { Router } from "express";
import benchmarks from "../controllers/benchmarks.controller.js";

const router = Router();

const BenchmarkRoutes = (app) => {
  router.get("/:signature", benchmarks.getBySignature);
  router.get("/", benchmarks.getAll);
  router.post("/", benchmarks.create);
  router.patch("/", benchmarks.update);
  router.delete("/", benchmarks.deleteBenchmark);

  app.use("/benchmarks", router);
};

export default BenchmarkRoutes;
