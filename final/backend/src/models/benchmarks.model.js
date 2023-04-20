import sql from "./db.js";

const Benchmark = function (benchmark) {
  this.id = benchmark.id;
  this.test1 = benchmark.test1;
  this.test_date = benchmark.test_date;
  this.ram = benchmark.ram;
  this.cpu_cores = benchmark.cpu_cores;
  this.os = benchmark.os;
};

Benchmark.create = (newBenchmark, resultCallback) => {
  sql.query("INSERT INTO benchmarks SET ?", newBenchmark, (err) => {
    if (err) {
      console.log(`Error: ${err.message}`);
      if (err.sqlMessage) {
        console.log(`SQL Error: ${err.sqlMessage}`);
      }
      resultCallback(err, null);
      return;
    }
    resultCallback(undefined);
  });
};

Benchmark.update = (signature, updatedBenchmark, resultCallback) => {
  sql.query(
    "UPDATE benchmarks SET ? WHERE signature = ?",
    [updatedBenchmark, signature],
    (err) => {
      if (err) {
        console.log(`Error: ${err.message}`);
        if (err.sqlMessage) {
          console.log(`SQL Error: ${err.sqlMessage}`);
        }
        resultCallback(err, null);
        return;
      }
      resultCallback(undefined);
    }
  );
};

Benchmark.getAll = (resultCallback) => {
  sql.query("SELECT * FROM benchmarks", (err, res) => {
    if (err) {
      console.log(`Error: ${err.message}`);
      if (err.sqlMessage) {
        console.log(`SQL Error: ${err.sqlMessage}`);
      }
      resultCallback(err, null);
      return;
    }
    resultCallback(undefined, res);
  });
};

Benchmark.deleteBenchmark = (signature, resultCallback) => {
  sql.query("DELETE FROM benchmarks WHERE signature = ?", [signature], (err) => {
    if (err) {
      console.log(`Error: ${err.message}`);
      if (err.sqlMessage) {
        console.log(`SQL Error: ${err.sqlMessage}`);
      }
      resultCallback(err, null);
      return;
    }
    resultCallback(undefined);
  });
};

export default Benchmark;
