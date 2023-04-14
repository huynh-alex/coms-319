import { Router } from "express";
import benchmarks from "../controllers/benchmarks.controller";

const router = Router();

const BenchmarkRoutes = (app) => {
    router.get('/', benchmarks.getAll);
    router.post('/', benchmarks.create);
}