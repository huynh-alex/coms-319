import Benchmark from "../models/benchmarks.model.js";

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
    } 
    res.sendStatus(201);
  });
};

const update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Empty request body" });
    return;
  }

  const updatedBenchmark = new Benchmark(req.body);

  User.update(req.params.ua, updatedBenchmark, (err) => {
    if (err) {
      res.status(500).send({
        message: "Unexpected error from updating benchmark.",
      });
    }
    res.sendStatus(201);
  });
};

const getAll = (req, res) => {
  Benchmark.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: "Unexpected error from getting all benchmarks.",
      });
    } 
    res.send(data);
  });
};

const deleteBenchmark = (req, res) => {
  Benchmark.deleteBenchmark(req.body.ua, (err, user) => {
    if (err) {
      res.status(500).send({
        message: "Unexpected error from getting all benchmarks.",
      });
    }
    res.send(user);
  });
};


export default { create, getAll, update, deleteBenchmark };
