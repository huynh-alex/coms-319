import { Router } from "express";
import benchmarks from "../controllers/benchmarks.controller.js";

const router = Router();

const BenchmarkRoutes = (app) => {
    router.get('/', benchmarks.getAll);
    router.post('/', benchmarks.create);

    app.use('/benchmarks', router);
}

export default BenchmarkRoutes;