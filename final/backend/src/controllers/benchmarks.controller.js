import Benchmark from "../models/benchmarks.model.js";

const create = (req, res) => {
  console.log(req.body);
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

  Benchmark.update(req.body.signature, updatedBenchmark, (err) => {
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

const getBySignature = (req, res) => {
  Benchmark.getBySignature(req.params.signature, (err, benchmark) => {
    if (err) {
      res.status(500).send({
        message: 'An error occurred while fetching the benchmark.',
      });
      return;
    }
    res.send(benchmark);
  });
};

const deleteBenchmark = (req, res) => {
  Benchmark.deleteBenchmark(req.body.signature, (err, benchmark) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "Unexpected error from deleting benchmarks.",
      });
    }
    res.send(benchmark);
  });
};


export default { create, getAll, update, deleteBenchmark, getBySignature };
