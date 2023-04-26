import sql from "./db.js";

const Benchmark = function (benchmark) {
  this.signature = benchmark.signature;
  this.test1 = benchmark.test1 || null;
  this.test2 = benchmark.test2 || null;
  this.test3 = benchmark.test3 || null;
  this.test4 = benchmark.test4 || null;
  this.test5 = benchmark.test5 || null;
  this.test_date = benchmark.test_date;
  this.ram = benchmark.ram;
  this.cpu_cores = benchmark.cpu_cores;
  this.cpu_arch = benchmark.cpu_arch;
  this.os = benchmark.os;
  this.engine = benchmark.engine;
  this.browser = benchmark.browser;
  this.device = benchmark.device;
};

Benchmark.create = (newBenchmark, resultCallback) => {
  sql.query("REPLACE INTO benchmarks SET ?", newBenchmark, (err) => {
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

Benchmark.getBySignature = (signature, resultCallback) => {
  sql.query('SELECT * FROM benchmarks WHERE signature = ? LIMIT 1', [signature], (err, res) => {
    if (err) {
      console.log(`Error: ${err.message}`);
      if (err.sqlMessage) {
        console.log(`SQL Error: ${err.sqlMessage}`);
      }

      resultCallback(err, null);
      return;
    }

    if (!res.length) return resultCallback(new Error('Benchmark from signature not found'), null);
    resultCallback(undefined, JSON.parse(JSON.stringify(res[0])));
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
    resultCallback({});
  });
};

export default Benchmark;
