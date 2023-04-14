import Benchmark from "../models/benchmarks.model.js";

const getAll = (req, res) => {
  Benchmark.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: "Unexpected error from getting all benchmarks.",
      });
    } else {
      res.send(data);
    }
  });
};

const create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Empty request body" });
    return;
  }

  const newBenchmark = new Benchmark(req.body);

  Benchmark.create(newBenchmark, (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        res.status(409).send({ message: "Error: Duplicate benchmark." });
      } else {
        res.status(500).send({
          message: "Unexpected error from creating benchmark.",
        });
      }
    } else {
      res.sendStatus(201);
    }
  });
};

export default { create, getAll };
